import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CloudinaryUploadWidget from "../../pages/register/CloudinaryUploadWidget";
import { toast } from "react-toastify";
import ImageThumbnail from "../imageThumbnail/ImageThumbnail";

const Hero = () => {
  const [imageInfo, setImageInfo] = useState(null);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [refetchImages, setRefetchImages] = useState(null); // State to hold the refetch function
  const [images, setImages] = useState(null);
  console.log(imageInfo);

  useEffect(() => {
    // Check if all objects are loaded before logging
    if (imageInfo) {
      const imageFiles = {
        original_filename: imageInfo.split("/").pop(),
        created_at: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        url: imageInfo,
        user: user?.displayName,
        email: user?.email,
        userImage: user?.photoURL,
      };
      console.log(imageFiles);

      // Now that all objects are loaded, you can make the API call
      axiosPublic
        .post("/images", imageFiles)
        .then((res) => {
          if (res?.data.insertedId) {
            setTimeout(() => {
              toast.success("Image Uploaded!!!");
              if (refetchImages) {
                refetchImages();
              }
            }, 2000);
          }
        })
        .catch((err) => console.log(err.error));
    }
  }, [
    axiosPublic,
    imageInfo,
    user?.displayName,
    user?.email,
    user?.photoURL,
    refetchImages,
  ]);

  return (
    <div>
      <section className="w-full px-4 lg:px-0 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
        <div>
          <span className="block mb-2 text-xs md:text-sm  font-medium">
            Better every day
          </span>
          <h3 className="text-4xl md:text-6xl text-red-500 font-extrabold">
            Let&apos;s change it up a little more
          </h3>
          <p className="text-base text-white my-4 md:my-6 md:mb-8">
            Our responsibility to acknowledge that we are all treaty people, and
            as such share the responsibility
          </p>
          <CloudinaryUploadWidget handleImageInfo={setImageInfo} />
        </div>

        {images !== null && <ShuffleGrid images={images} />}
      </section>
      <ImageThumbnail
        refetchImages={setRefetchImages}
        fetchedImages={setImages}
      />
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array?.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (images) => {
  if (!images || images.length === 0) return [];

  const shuffledImages = shuffle(images);
  const selectedImages = shuffledImages.slice(0, 16);

  return selectedImages.map((image) => (
    <motion.div
      key={image._id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundSize: "cover",
      }}></motion.div>
  ));
};

const ShuffleGrid = ({ images }) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares(images));

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, [images]);

  const shuffleSquares = () => {
    setSquares(generateSquares(images));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;

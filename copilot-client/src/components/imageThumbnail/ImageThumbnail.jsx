import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery, useMutation } from "@tanstack/react-query";
import "./gallery.css";
import { RxCross2 } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { saveAs } from "file-saver";
import Loading from "../loading/Loading";
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "./Modal";
import Select from "./SpeedDial";
import SpeedDial from "./SpeedDial";

const ImageThumbnail = ({ refetchImages }) => {
  const [open, setOpen] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  const axiosPublic = useAxiosPublic();
  const [imageName, setImageName] = useState("");
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageName, setModalImageName] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgId, setImgId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get("/images");
        setImages(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();

    // If you need to refetch images, you can pass refetchImages as a dependency
    // refetchImages(() => fetchData());
  }, [axiosPublic]);

  console.log(imgId);

  // const {
  //   data: images,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["images"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/images");
  //     return res.data;
  //   },
  // });
  // console.log(images);

  const { mutate } = useMutation({
    mutationFn: async (item) => {
      const res = await axiosPublic.post("/dowloadedImages", item);
      console.log(res.data);
      return res.data;
    },
  });

  // refetchImages(() => refetch);

  if (isLoading) {
    return <Loading />;
  }

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setOpen(true);
  };

  const downloading = () => {
    saveAs(tempimgSrc, imageName);
    const downloadedImage = {
      imageName: imageName,
      downloadedAt: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      imageUrl: tempimgSrc,
      downloader: user?.displayName,
      downloaderEmail: user?.email,
      downloaderImage: user?.photoURL,
    };
    console.log(downloadedImage);
    mutate(downloadedImage);
  };

  // const downloadingImage = async (imSrc, imName, forceDownload) => {
  //   if (!forceDownload) {
  //     const link = document.createElement("a");
  //     link.href = imSrc;
  //     link.download = imName;
  //     document.body.appendChild(link); // Fixed typo here
  //     link.click();
  //     document.body.removeChild(link);
  //   }

  //   const imageBlob = await fetch(imSrc)
  //     .then((response) => response.arrayBuffer())
  //     .then((buffer) => new Blob([buffer], { type: "image/jpg" }));

  //   // console.log(imageBlob);

  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(imageBlob);
  //   link.download = imName;
  //   document.body.appendChild(link); // Fixed typo here
  //   link.click();
  //   document.body.removeChild(link);

  //   const downloadedImage = {
  //     imageName: imageName,
  //     downloadedAt: new Date().toLocaleString("en-US", {
  //       month: "short",
  //       day: "2-digit",
  //       year: "numeric",
  //       hour: "numeric",
  //       minute: "2-digit",
  //       hour12: true,
  //     }),
  //     imageUrl: tempimgSrc,
  //     downloader: user?.displayName,
  //     downloaderEmail: user?.email,
  //     downloaderImage: user?.photoURL,
  //   };
  //   console.log(downloadedImage);
  //   mutate(downloadedImage);
  // };

  // const handleModalOpen = (imgSrc, imgName) => {
  //   setModalImageSrc(imgSrc);
  //   setModalImageName(imgName);
  //   setOpenModal(true);
  // };

  return (
    <div>
      <div className="py-16 flex flex-col items-center md:items-end px-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-red-500 pb-2">
          User-Shared Photos
        </h1>
        <p className="md:w-4/5 lg:w-1/2 md:text-right text-xs md:text-base">
          The internet’s source for visuals, fueled by the creative
          contributions of individuals worldwide, serves as an unparalleled
          platform for inspiration.
        </p>
      </div>

      <div className={open ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <RxCross2
          className="hover:scale-150 duration-300"
          onClick={() => setOpen(false)}
        />
        <BsDownload
          className="mr-12 hover:scale-150 duration-300"
          onClick={downloading}
        />
      </div>
      <div className="gallery">
        {images.map((item) => (
          <div className="pics" key={item._id}>
            <div className="relative" onMouseOver={() => setImgId(item._id)}>
              <img
                src={item.url}
                alt=""
                className="relative"
                onClick={() => {
                  if (!openModal) {
                    setImageName(item.original_filename);
                    getImg(item.url, item.original_filename);
                  }
                }}
              />

              <div className="absolute text-xl bottom-2 right-4 z-20">
                <SpeedDial itemId={item._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageThumbnail;

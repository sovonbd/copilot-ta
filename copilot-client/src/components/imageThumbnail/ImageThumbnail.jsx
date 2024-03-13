import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery, useMutation } from "@tanstack/react-query";
import "./gallery.css";
import { RxCross2 } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { saveAs } from "file-saver";

const ImageThumbnail = ({ refetchImages, fetchedImages }) => {
  const [open, setOpen] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  const axiosPublic = useAxiosPublic();
  const [imageName, setImageName] = useState("");
  const { user } = useAuth();

  const {
    data: images,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const res = await axiosPublic.get("/images");
      return res.data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (item) => {
      const res = await axiosPublic.post("/dowloadedImages", item);
      console.log(res.data);
      return res.data;
    },
  });

  refetchImages(() => refetch);
  fetchedImages(images);

  if (isLoading) {
    return <p className="text-red-500 text-5xl">Loading....</p>;
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
        {images.map((item) => {
          return (
            <div
              className="pics"
              key={item._id}
              onClick={() => {
                setImageName(item.original_filename);
                getImg(item.url);
              }}>
              <img src={item.url} alt="" className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageThumbnail;

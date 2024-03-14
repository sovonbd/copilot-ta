// import { Axios } from "axios";

const axiosPublic = axios.create({
  baseURL: "https://copilot-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

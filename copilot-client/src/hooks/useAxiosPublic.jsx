// import { Axios } from "axios";

const axiosPublic = axios.create({
  baseURL: "http://18.219.198.148:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

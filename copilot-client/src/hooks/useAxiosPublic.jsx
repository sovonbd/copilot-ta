// import { Axios } from "axios";

const axiosPublic = axios.create({
  baseURL: "http://18.222.146.145:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

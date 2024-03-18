// import { Axios } from "axios";

const axiosPublic = axios.create({
  baseURL: "http://ec2-18-223-29-55.us-east-2.compute.amazonaws.com",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

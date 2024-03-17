// import { Axios } from "axios";

const axiosPublic = axios.create({
  baseURL: "ec2-18-219-198-148.us-east-2.compute.amazonaws.com:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

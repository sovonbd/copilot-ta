import Loading from "../../../components/loading/Loading";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Downloads = () => {
  const { user } = useAuth();

  // console.log(user.email);
  const axiosPublic = useAxiosPublic();
  const { data: downloadItems = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/images/${user?.email}`);
      return res.data;
    },
    enabled: !!user,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(downloadItems);

  return (
    <div className="overflow-x-auto h-screen">
      {downloadItems.length > 0 ? (
        <table className="table text-center w-2/3 mx-auto bg-transparent rounded-lg shadow-inner shadow-white/70">
          {/* head */}
          <thead className="h-16 text-lg">
            <tr className="text-white">
              <th>Image</th>
              <th>Image Name</th>
              <th>Downloaded Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 2 */}
            {downloadItems?.map((item) => (
              <tr
                key={item._id}
                className=" hover:bg-gradient-to-br from-red-600 via-red-500/60 to-red-500">
                <td>
                  <img src={item.imageUrl} className="w-8 mx-auto" alt="" />
                </td>
                <td>{item.imageName}</td>
                <td>{item.downloadedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="flex justify-center items-center h-[80vh]">
          No Downloads yet.
        </p>
      )}
    </div>
  );
};

export default Downloads;

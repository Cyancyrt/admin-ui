import React from "react";
import UserCard from "./UserCard";
import PostCard from "./PostCard";
import { users, newUsers, getUsers, getPosts } from "./Service.jsx";

function Exercise() {
  const [user, setUser] = React.useState(users);
  const [post, setPost] = React.useState([]);

  const [clicked, setClicked] = React.useState(false);
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUsers();
        setUser(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    const fetchPostData = async () => {
      try {
        const data = await getPosts();
        setPost(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchUserData();
    fetchPostData();
    setClicked(false); // Reset clicked state when component mounts
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-1 text-blue-700">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setClicked(!clicked);
            }}
          >
            {clicked ? "User Card" : "Post Card"}
          </a>
        </h1>
        <h5 className="text-center mb-6 text-gray-600">
          Untuk mengubah konteks kartu, harap tekan title di atas ini
        </h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clicked
            ? user.map((user, index) => <UserCard key={index} {...user} />)
            : post.map((post, index) => <PostCard key={index} {...post} />)}
        </div>
      </div>
    </>
  );
}

export default Exercise;

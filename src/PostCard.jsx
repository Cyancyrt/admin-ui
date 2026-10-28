import React, { useEffect, useState } from "react";

function UserCard(props) {
  const { ...rest } = props;

  const [clicked, setClicked] = useState(false);
  return (
    <a
      className={`${clicked ? "bg-blue-100" : "bg-white"} p-6 rounded-lg shadow hover:shadow-md transition-shadow`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setClicked(!clicked);
      }}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{rest.title}</h2>
      <p className="text-gray-600">{rest.body}</p>
    </a>
  );
}

export default UserCard;

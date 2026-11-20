import React, { useEffect, useState } from "react";

function UserCard(props) {
  const { ...rest } = props;

  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{rest.name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {rest.email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {rest.street}, {rest.city}
      </p>
      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}
      <button
        className={`${clicked ? "bg-special-green" : "bg-gray-01"} text-white p-2 rounded-md`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;

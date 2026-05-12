import React, { useState } from "react";

const Hijo = ({ handlerLogin }) => {
  const [userName, setUserName] = useState("Jhonatan");

  const handlerClick = () => {
    handlerLogin(userName);
  };

  return (
    <div className="border-2 border-red-700 m-2 p-4">
      <h2>Este es un componente Hijo</h2>
      <p>
        Nombre del Usuario <span className="font-bold">{userName}</span>
      </p>
      <div className="flex justify-center mt-0.5 ">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded  hover:border-2 border-blue-500 cursor-pointer "
          onClick={handlerClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Hijo;

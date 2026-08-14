import React, { useState } from "react";

const FormularioExample = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Formulario Example</h1>
      <form
        className="flex flex-col gap-2 mt-2 ml-1 mr-1"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex-row flex border border-gray-300 m-1 p-1">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            placeholder="jhon_doe"
            className="border border-gray-300 p-1 rounded"
          />
        </fieldset>
        <fieldset className="flex-row flex border border-gray-300 m-1 p-1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="••••••••"
            className="border border-gray-300 p-1 rounded"
          />
        </fieldset>

        <button
          type="submit"
          className="border w-1/3 flex items-center justify-center border-blue-500 bg-blue-200 p-1 rounded hover:bg-blue-300 cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioExample;

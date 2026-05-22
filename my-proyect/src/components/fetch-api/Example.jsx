import React, { useEffect, useState } from "react";

const Example = () => {
  const url = "http://localhost:8080/api/clientes";
  const [users, setUsers] = useState([]);
  const obtenerUsuarios = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);
  return (
    <div className="flex items-center text-lg font-bold flex-col text-center">
      <h1>fetch | llamado a una api ....</h1>
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead>
          <tr>
            <th className="px-6 py-3 font-medium">Nombres</th>
            <th className="px-6 py-3 font-medium">Apellidos</th>
            <th className="px-6 py-3 font-medium">Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombres}</td>
              <td>{user.apellidos}</td>
              <td>{user.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Example;

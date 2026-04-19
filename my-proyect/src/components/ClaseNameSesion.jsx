import React from "react";
import "./ClaseNameSesion.css";
const ClaseNameSesion = () => {
  return (
    <div className="dark">
      <h2>ClaseNameSesion</h2>
      <form>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" placeholder="username" />
        <br />
        <select defaultValue={"css"}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </select>
      </form>
    </div>
  );
};

export default ClaseNameSesion;

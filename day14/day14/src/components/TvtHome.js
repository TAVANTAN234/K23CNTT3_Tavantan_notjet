import React from "react";
import { Link } from "react-router-dom";

const TvtHome = () => {
  return (
    <div>
      <h1>Ta van tan - Mini Project</h1>
      <h2>K23CNTx - ReactJS with API</h2>
      <nav>
        <Link to="/list-user">Danh sách User</Link> | 
        <Link to="/create-user">Thêm mới User</Link>
      </nav>
    </div>
  );
};

export default TvtHome;

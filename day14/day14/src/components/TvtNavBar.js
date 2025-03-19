import React from "react";
import { Link } from "react-router-dom";

const TvtNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/list-user">Danh sách User</Link>
        </li>
        <li>
          <Link to="/create-user">Thêm mới User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TvtNavBar;

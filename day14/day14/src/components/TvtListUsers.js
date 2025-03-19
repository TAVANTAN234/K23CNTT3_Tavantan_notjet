import React, { useState, useEffect } from "react";
import axios from "axios";

const TvtListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://your-mockapi-url.com/tvt_users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.tvt_name} - {user.tvt_email} - {user.tvt_phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TvtListUsers;

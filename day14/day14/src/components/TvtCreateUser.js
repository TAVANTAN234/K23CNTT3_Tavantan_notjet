import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TvtCreateUser = () => {
  const [formData, setFormData] = useState({
    tvt_name: "",
    tvt_email: "",
    tvt_phone: "",
    tvt_active: true, // Mặc định là Hoạt động
  });

  const navigate = useNavigate();

  // Xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Gửi dữ liệu lên API để tạo user mới
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://your-mockapi-url.com/tvt_users", formData)
      .then(() => {
        alert("Thêm user thành công!");
        navigate("/list-user"); // Quay lại danh sách user sau khi thêm
      })
      .catch((error) => console.error("Lỗi khi thêm user:", error));
  };

  return (
    <div>
      <h2>Thêm mới thông tin User</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="tvt_name" value={formData.tvt_name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="tvt_email" value={formData.tvt_email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="tvt_phone" value={formData.tvt_phone} onChange={handleChange} required />

        <label>Active:</label>
        <input type="radio" name="tvt_active" value={true} checked={formData.tvt_active} onChange={handleChange} /> Hoạt động
        <input type="radio" name="tvt_active" value={false} checked={!formData.tvt_active} onChange={handleChange} /> Khóa

        <button type="submit">Create</button>
        <button type="button" onClick={() => navigate("/list-user")}>Back</button>
      </form>
    </div>
  );
};

export default TvtCreateUser;

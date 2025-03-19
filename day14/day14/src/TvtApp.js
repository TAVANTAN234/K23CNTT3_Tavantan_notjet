import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvtHome from "./components/TvtHome";
import TvtListUsers from "./components/TvtListUsers";
import TvtCreateUser from "./components/TvtCreateUser";

function TvtApp() {
  return (
    <Router>
      <TvtNavBar />
      <Routes>
        <Route path="/" element={<TvtHome />} />
        <Route path="/list-user" element={<TvtListUsers />} />
        <Route path="/create-user" element={<TvtCreateUser />} />
      </Routes>
    </Router>
  );
}

export default TvtApp;

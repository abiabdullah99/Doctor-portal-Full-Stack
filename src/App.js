import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/AppointmentInfo";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
const App = () => {
  return (
    <div className="mx-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;

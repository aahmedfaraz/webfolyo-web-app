import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Morale from "./components/pages/Morale";
import NotFound from "./components/pages/NotFound";
import SignUp from "./components/pages/SignUp";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HiringWindow from "./components/pages/HiringWindow";
import AddProjects from "./components/pages/AddProjects";
import AboutUs from "./components/pages/AboutUs";
import { useMediaQuery } from "react-responsive";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Morale /> */}
      <Routes>
        {/* <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} /> */}
        <Route path='/' element={<Morale />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/add_project' element={<AddProjects />} />
        <Route path='/hiring_window' element={<HiringWindow />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

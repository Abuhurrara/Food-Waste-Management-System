import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { NGOEmployeeSignUp } from "./components/NGOEmployeeSignUp";
import { RestaurantEmployeeSignUp } from "./components/RestaurantEmployeeSignUp";
import { NGOManagementSignUp } from "./components/NGOManagementSignUp";
import { RestaurantManagementSignUp } from "./components/RestaurantManagementSignUp";
import { Admin } from "./components/AdminDashboard/Admin";
import { Restaurant } from "./components/AdminDashboard/Restaurant";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up/ngo-employee-sign-up" element={<NGOEmployeeSignUp/>} />
        <Route path="/sign-up/restaurant-employee-sign-up" element={<RestaurantEmployeeSignUp/>} />
        <Route path="/sign-up/restaurant-management-sign-up" element={<RestaurantManagementSignUp/>} />
        <Route path="/sign-up/ngo-management-sign-up" element={<NGOManagementSignUp/>} />
        <Route path="/admin-dashboard/admin" element={<Admin/>} />
        <Route path="/admin-dashboard/restaurant" element={<Restaurant/>} />

      </Routes>
      <Footer/>
    </>
  );
};

export { App };

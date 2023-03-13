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
import { NGO } from "./components/AdminDashboard/Ngo";
import { Homee } from "./components/RestaurantAdmin/Homee";
import { Accounts } from "./components/RestaurantAdmin/Accounts";
import { ApproveEmployee } from "./components/RestaurantAdmin/ApproveEmployee";
import { DonationHistory } from "./components/RestaurantAdmin/DonationHistory";
import { Active } from "./components/RestaurantAdmin/Active";
import { ToBePicked } from "./components/RestaurantAdmin/ToBePicked";

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
        <Route path="/admin-dashboard/ngo" element={<NGO/>} />
        <Route path="/restaurant-admin/homee" element={<Homee/>} />
        <Route path="/restaurant-admin/accounts" element={<Accounts/>} />
        <Route path="/restaurant-admin/approve-employee" element={<ApproveEmployee/>} />
        <Route path="/restaurant-admin/donation-history" element={< DonationHistory />} />
        <Route path="/restaurant-admin/active" element={< Active />} />
        <Route path="/restaurant-admin/to-be-picked" element={< ToBePicked />} />
        
        
        

      </Routes>
      <Footer/>
    </>
  );
};

export { App };

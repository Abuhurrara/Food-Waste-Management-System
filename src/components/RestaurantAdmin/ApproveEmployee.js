import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";

const ApproveEmployee = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sign-up-hero">
        <h1>Restaurant Dashboard(Admin)</h1>
      </div>
      <section className="menu d-flex">
        <div className="sidebar">
          <h5 className="abc">restaurant</h5>
          <hr className="title-line"></hr>

          <div className="items d-flex flex-column">
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/homee")}
            >
              Home
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/Accounts")}
            >
              Accounts
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/approve-employee")}
            >
              Approve Employee
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/admin-dashboard/donation-history")}
            >
              Donation History
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/admin-dashboard/restaurant")}
            >
              Active
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/admin-dashboard/restaurant")}
            >
              To Be Picked
            </button>
            <hr></hr>
            <button className="post-food-btn" onClick={() => navigate("/admin-dashboard/restaurant")}>Post Food</button>
          </div>
        </div>
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">Employee Details</h5>
              <Link to="/admin-dashboard/ngo" className="add-restaurant">
                Approve Employee
              </Link>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Employee Name</th>
                  <th></th>
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >View Details</button>  <button className="btn btn-delete mr-2" >Reject</button>
                  <button className="btn btn-delete" >Approve</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >View Details</button>  <button className="btn btn-delete mr-2" >Reject</button>
                  <button className="btn btn-delete" >Approve</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >View Details</button>  <button className="btn btn-delete mr-2" >Reject</button>
                  <button className="btn btn-delete" >Approve</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >View Details</button>  <button className="btn btn-delete mr-2" >Reject</button>
                  <button className="btn btn-delete" >Approve</button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >View Details</button>  <button className="btn btn-delete mr-2" >Reject</button>
                  <button className="btn btn-delete" >Approve</button></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >View Details</button>  <button className="btn btn-delete mr-2" >Reject</button>
                  <button className="btn btn-delete" >Approve</button></td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </section>
    </>
  );
};
export { ApproveEmployee };
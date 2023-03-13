import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";

const DonationHistory = () => {
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
              onClick={() => navigate("/restaurant-admin/accounts")}
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
              onClick={() => navigate("/restaurant-admin/donation-history")}
            >
              Donation History
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/active")}
            >
              Active
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/to-be-picked")}
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
              <h5 className="h5-head">Donation History</h5>
              
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Organization</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Detail</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr className="tr-history">
                  <th scope="row">1</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Rice, wheat and Barley</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">2</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Grain</td>


                </tr>
                <tr className="tr-history">
                  <th scope="row">3</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Lentils</td>

                </tr>
                <tr className="tr-history">
                  <th scope="row">4</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Water</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">5</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Chicken</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">6</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Mutton</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </section>
    </>
  );
};
export { DonationHistory };
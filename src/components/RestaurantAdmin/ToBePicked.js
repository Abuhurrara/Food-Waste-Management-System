import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";

const ToBePicked = () => {
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
            <button
              className="post-food-btn"
              onClick={() => navigate("/admin-dashboard/restaurant")}
            >
              Post Food
            </button>
          </div>
        </div>
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">To Be Picked</h5>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Restaurant ID</th>
                  <th scope="col">Food Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Updated At</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-history">
                  <th scope="row">1</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">2</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">3</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">4</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">5</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">6</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export { ToBePicked };

import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";

const Home = () => {
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
              onClick={() => navigate("/restaurant-admin/Homee")}
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
              onClick={() => navigate("/restaurant-admin/ApproveEmployee")}
            >
              Approve Employee
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/homee")}
            >
              Donation History
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant-admin/homee")}
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
        <div className="stats">
          <div className="container-fluid">
            <div className="row">
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={handShaking}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="stats-detail">Meals Donated</p>
                </div>
              </div>
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={donorsRegistered}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="stats-detail">NGO Resgistered</p>
                </div>
              </div>
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={handShaking}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="stats-detail">Restaurant Registered</p>
                </div>
              </div>
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={handShaking}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="restaurant-p stats-detail">Donors Registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;

import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../../css/admin.css";

const Restaurant = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sign-up-hero">
        <h1>Admin Dashboard</h1>
      </div>
      <section className="menu d-flex">
        <div className="sidebar">
          <h5 className="abc">Admin</h5>
          <hr className="title-line"></hr>

          <div className="items d-flex flex-column">
          <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/admin-dashboard/admin")}
            >
              Home
            </button>
            <hr></hr>
            <button
              className="items-button"
              onClick={() => navigate("/restaurant.js")}
            >
              Restaurant
            </button>
            <hr></hr>
            <button className="items-button" onClick={() => navigate("")}>
              NGOs
            </button>
            <hr></hr>
          </div>
        </div>
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">Restaurant Details</h5>
              <Link to="/admin-dashboard/restaurant" className="add-restaurant">
                Add Restaurant
              </Link>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Restaurant</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td><button className="btn btn-success ml-2" >Edit  </button><button className="btn btn-danger" >Delete</button></td>
                  <td><button className="btn btn-danger" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export { Restaurant };
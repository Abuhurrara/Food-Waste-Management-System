import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../../css/admin.css";

const NGO = () => {
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
              onClick={() => navigate("/admin-dashboard/restaurant")}
            >
              Restaurant
            </button>
            <hr></hr>
            <button className="items-button" onClick={() => navigate("/ngo")}>
              NGOs
            </button>
            <hr></hr>
          </div>
        </div>
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">NGO Details</h5>
              <Link to="/admin-dashboard/ngo" className="add-restaurant">
                Add NGO
              </Link>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NGO</th>
                  <th></th>
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="th-name">Al-Khidmat</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="th-name">Al-Khidmat</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="th-name">Al-Khidmat</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td className="th-name">Al-Khidmat</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td className="th-name">Al-Khidmat</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td className="th-name">Al-Khidmat</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export { NGO };

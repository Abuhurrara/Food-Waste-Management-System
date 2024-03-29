import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../../css/admin.css";
import Sidebar from "../Sidebar";

const Restaurant = () => {
  
  const data = [
    {
      title: 'Home',
      route: "admin-dashboard/admin"
    },
    {
      title: 'Restaurant',
      route: "admin-dashboard/restaurant"
    },
    {
      title: 'NGOs',
      route: "admin-dashboard/ngo"
    },
]
  return (
    <>
      <div className="sign-up-hero">
        <h1>Admin Dashboard</h1>
      </div>
      <section className="menu d-flex">
        <Sidebar header={'Admin'} data={data}/>
      
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
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Restaurant</th>
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
export { Restaurant };

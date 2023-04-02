import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";
import Sidebar from "../Sidebar";

const Accounts = () => {
  const data = [
      {
        title: 'Home',
        route: "homee"
      },
      {
        title: 'Accounts',
        route: "Accounts"
      },
      {
        title: 'Approve Employee',
        route: "ApproveEmployee"
      },
      {
        title: 'Donation History',
        route: "restaurant"
      },
      {
        title: 'Active',
        route: "restaurant"
      },
      {
        title: 'To Be Picked',
        route: "restaurant"
      }
  ]
  return (
    <>
      <div className="sign-up-hero">
        <h1>Restaurant Dashboard(Admin)</h1>
      </div>
      <section className="menu d-flex">
        <Sidebar header='Restaurant' data={data} /> 
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">Employee Details</h5>
              <Link to="/admin-dashboard/ngo" className="add-restaurant">
                Add Employee
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
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td><button className="btn btn-edit ml-2" >Edit  </button>  <button className="btn btn-delete" >Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td className="th-name">Abdul Razzaq</td>
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
export { Accounts };
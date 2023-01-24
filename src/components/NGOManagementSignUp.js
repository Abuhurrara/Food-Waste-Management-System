import React from "react";

import { Brands } from "./Brands";
import "../css/sign-up.css";
import { Link } from "react-router-dom";
const NGOManagementSignUp=()=>{
return (<>
    <div className="sign-up-hero">
        <h1>Sign Up</h1>
        <div className="sign-up-breadcrumbs">
          <Link to="/" className="home-breadcrumb">
            Home
          </Link>
          <span className="slash"> / </span>
          <Link to="/sign-up" className="home-breadcrumb">
            Sign Up
          </Link>
          <span className="slash"> / </span>
          <Link to="/sign-up/ngo-management-sign-up" className="sign-up-breadcrumb">
            NGO Management Sign Up
          </Link>
        </div>
      </div>
      
      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h5>Create an account</h5>
          <h1>NGO Management Sign Up</h1>
          <div className="sign-up-form-fields">
            <form action="/">
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>ID</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your ID"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Mail</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>NGO name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your NGO name"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Zip code</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your city"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Branch City</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your branch city"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Country</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Country"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Management ID</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your branch address"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Registration Certificate (.png/.jpeg/.pdf)</label>
                  <br />
                  <input
                  type="file" accept="image/png, image/jpg, image/gif, image/jpeg"
                    
                    className="reg-cert"
                  />
                </div>
                
              </div>
              <div className="password-confirm-pass">
                <div className="password-container">
                <label>Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="first-name"
                  />
                </div>
                <div className="confirm-pass-container">
                <label>Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="first-name"
                  />
                </div>
              </div>
              <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <Brands />
    </>
  

)

}

export {NGOManagementSignUp};
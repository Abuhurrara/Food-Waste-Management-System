import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../css/homee.css'

function Sidebar({header, data}) {
    const navigate = useNavigate();
  return (
    <div className="sidebar">
    <h5 className="abc">{header}</h5>
    <hr className="title-line"></hr>

    {data.map((item, key) => (

    <div className="items d-flex flex-column" key={key.title}>
      <button
        className="items-button"
        onClick={() => navigate(`/${item.route}`)}
      >
        {item.title}
      </button>
      </div>
    ))
    }
<hr></hr>
<button className="post-food-btn" onClick={() => navigate("/admin-dashboard/restaurant")}>Post Food</button>
  </div>
  )
}

export default Sidebar

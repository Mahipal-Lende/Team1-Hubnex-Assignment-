import React from "react";
import "./LocationDetails.css";

const LocationDetails: React.FC = () => {
  return (
    <div className="location-details">
      <div className="city-links">
        <a href="#">Gurugram</a>
        <a href="#">Bangalore</a>
        <a href="#">Pune</a>
        <a href="#">Lucknow</a>
      </div>
      <p>
        <img src="https://icons.iconarchive.com/icons/steve/zondicons/512/Location-icon.png" alt="Location" /> Etihad Airways Centre, Al Rahah, Al Muneera, Abu Dhabi, UAE
      </p>
      <p>
        <img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="Email" /> hello@hubnex.in
      </p>
      <p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj0w2NDmrj1Izg4MGhSVFrYL1De0dEaqF7Q&s" alt="Phone" /> +91 1234567890
      </p>
      <button className="loc_btn">Contact Us →</button>
    </div>
  );
};

export default LocationDetails;
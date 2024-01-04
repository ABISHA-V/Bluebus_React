import React from "react";
import './s.css'
const Success= () => (
  <div className="main-container" style={{backgroundColor:"white",height:500,width:700,marginLeft:300}}>
    <div className="check-container">
      <div className="check-background">
        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 25L27.3077 44L58.5 7"
            stroke="white"
            strokeWidth={13}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
        </svg>
        
      </div>
      <br>
      </br>
   
      <div className="check-shadow" />
    </div>
    <h4>PAYMENT SUCCESS</h4>
    <br></br>
    <p>Booking Confirmed: Get ready to rock your plans! 🎉✨</p>
  </div>
)
export default Success;

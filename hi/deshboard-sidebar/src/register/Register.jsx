import React from "react"
import './r.css'
import { Link } from "react-router-dom";
const RegisterForm= () => (
    
    <div className="container">
      <div className="title">REGISTRATION</div><br></br>
      
      <form action="#" className="hai" style={{backgroundColor:"white"}}>
        <div className="user__details">
          <div className="input__box">
         
            <span className="details"> Name</span>
            <input type="text" placeholder="E.g: John Smith" required/>
          </div>
          
          <div className="input__box">
         
            <span className="details">Pick up location</span>
            <input type="text" placeholder="Kovaipudur" required/>
          </div>
          <div className="input__box">
            <span className="details">Email</span>
            <input type="email" placeholder="johnsmith@hotmail.com" required />
          </div>
          <div className="input__box">
            <span className="details">Phone Number</span>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="012-345-6789"
              required=""
            />
          </div>
          <div className="input__box">
            <span className="details">Age</span>
            <input type="number" placeholder="Age" min="1" max="80" required/>
          </div>
          <div className="input__box">
            <span className="details">Date</span>
            <input type="date" placeholder="DD/MM/YYYY" required="" />
          </div>
        </div>
        <div className="gender__details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender__title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span>Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two" />
              <span>Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three" />
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
            <Link to='/book'>
          <input type="submit" defaultValue="Register" /></Link>
        </div>
      </form>
    </div>
  )
  export default RegisterForm;
  
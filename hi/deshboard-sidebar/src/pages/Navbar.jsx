import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Booking from "./Bookingpage";
import Card from "./Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  const copiedData = (val) => {
    setShowBooking(true);
    setFrom(val.FROM);
    setTo(val.TO);
    console.log(val.FROM);
    console.log(val.TO);
  };

  return (
    <div className="p-5">
      <section className="bg-blue-300 rounded-2xl p-9 mb-10">
        <div className="container w-full flex items-center justify-between">
          <div className="flex items-center">
            <p className="p-4">
              <Player
                autoplay={true}
                loop={true}
                controls={true}
                src="https://assets6.lottiefiles.com/packages/lf20_2PMsFKmVCe.json"
                style={{
                  height: "30px",
                  width: "200px",
                  marginLeft: "-50px",
                  marginTop: "-5px",
                }}
              ></Player>
            </p>
            <p className="text-3xl font-semibold">
              BlueBus
            </p>
            &#160;
            &#160;
            &#160;
            &#160;
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="p-4">Login</Link>
            &#160;
            &#160;
            &#160;
            &#160;
            <Link to="/dashboard" className="p-4">Sign up</Link>
            &#160;
            &#160;
            &#160;
            &#160;
            <Link to='/contact' className="p-4">About</Link>
            
          </div>
          &#160;
          &#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;&#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
            &#160;
          <button
            className="bml-auto bg-[#f23939] h-10 rounded-2xl mt-2 px-4 text-white font-bold"
            onClick={() => { navigate("/") }}
          >
            LogOut
          </button>
        </div>
        <div className="flex mt-10 ml-5">
          <div className="w-1/2"style={{backgroundColor:"white",width:700}}>
            {showBooking && <Card copiedData={copiedData} />}
            <Card />
          </div>
          <div className="w-1/2 ml-11">
            {/* Your content for the right side */}
            
          </div>
        </div>
      </section>
      
      <div className={showBooking ? '' : 'hidden'}>
        <Booking Fromm={From} Too={To} />
      </div>
      
    </div>
  );
};

export default Navbar;

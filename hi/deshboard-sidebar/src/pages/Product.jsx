import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './p.css'
const Product = () => {
    // Load selected seats from localStorage on component mount
    const savedSelectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    const [selectedSeats, setSelectedSeats] = useState(savedSelectedSeats);
  
    useEffect(() => {
      // Save selected seats to localStorage whenever it changes
      localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    }, [selectedSeats]);
  
    const handleSeatClick = (seatId) => {
      if (!selectedSeats.includes(seatId)) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      }
    };
  
    const isSeatSelected = (seatId) => selectedSeats.includes(seatId);

  return (
    <div className="theatre">
      <div className="screen-side">
        <div className="screen">Screen</div>
        <h3 className="select-text">Please select a seat</h3>
      </div>
      <div className="exit exit--front"></div>
      <ol className="cabin">
        <li className="row row--1">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("1A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="1A"
              onClick={() => handleSeatClick("1A")}/>
              <label htmlFor="1A">1A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("1B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="1B" onClick={() => handleSeatClick("1B")}/>
              <label htmlFor="1B">1B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("1C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="1C" onClick={() => handleSeatClick("1C")}/>
              <label htmlFor="1C">1C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("1D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" disabled="" id="1D" onClick={() => handleSeatClick("1D")}/>
              <label htmlFor="1D">1D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("1E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="1E" onClick={() => handleSeatClick("1E")}/>
              <label htmlFor="1E">1E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("1F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="1F" onClick={() => handleSeatClick("1F")}/>
              <label htmlFor="1F">1F</label>
            </li>
          </ol>
        </li>
        <li className="row row--2">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("2A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="2A" onClick={() => handleSeatClick("2A")}/>
              <label htmlFor="2A">2A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("2B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="2B" onClick={() => handleSeatClick("2B")}/>
              <label htmlFor="2B">2B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("2C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="2C" onClick={() => handleSeatClick("2C")}/>
              <label htmlFor="2C">2C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("2D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="2D" onClick={() => handleSeatClick("2D")}/>
              <label htmlFor="2D">2D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("2E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="2E" onClick={() => handleSeatClick("2E")}/>
              <label htmlFor="2E">2E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("2F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="2F"onClick={() => handleSeatClick("2F")} />
              <label htmlFor="2F">2F</label>
            </li>
          </ol>
        </li>
        <li className="row row--3">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("3A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="3A" onClick={() => handleSeatClick("3A")}/>
              <label htmlFor="3A">3A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("3B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="3B"onClick={() => handleSeatClick("3B")} />
              <label htmlFor="3B">3B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("3C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="3C"onClick={() => handleSeatClick("3C")} />
              <label htmlFor="3C">3C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("3D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="3D"onClick={() => handleSeatClick("3D")} />
              <label htmlFor="3D">3D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("3E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="3E"onClick={() => handleSeatClick("3E")} />
              <label htmlFor="3E">3E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("3F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="3F" onClick={() => handleSeatClick("13F")}/>
              <label htmlFor="3F">3F</label>
            </li>
          </ol>
        </li>
        <li className="row row--4">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("4A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="4A"onClick={() => handleSeatClick("4A")} />
              <label htmlFor="4A">4A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("4B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="4B"onClick={() => handleSeatClick("4B")} />
              <label htmlFor="4B">4B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("4C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="4C" onClick={() => handleSeatClick("4C")}/>
              <label htmlFor="4C">4C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("4D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="4D" onClick={() => handleSeatClick("4D")}/>
              <label htmlFor="4D">4D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("4E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="4E" onClick={() => handleSeatClick("4E")}/>
              <label htmlFor="4E">4E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("4F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="4F" onClick={() => handleSeatClick("4F")}/>
              <label htmlFor="4F">4F</label>
            </li>
          </ol>
        </li>
        <li className="row row--5">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("5A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="5A" onClick={() => handleSeatClick("5A")}/>
              <label htmlFor="5A">5A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("5B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="5B" onClick={() => handleSeatClick("5B")}/>
              <label htmlFor="5B">5B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("5C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="5C" onClick={() => handleSeatClick("5C")}/>
              <label htmlFor="5C">5C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("5D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="5D" onClick={() => handleSeatClick("5D")}/>
              <label htmlFor="5D">5D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("5E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="5E" onClick={() => handleSeatClick("5E")}/>
              <label htmlFor="5E">5E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("5F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="5F" onClick={() => handleSeatClick("5F")}/>
              <label htmlFor="5F">5F</label>
            </li>
          </ol>
        </li>
        <li className="row row--6">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("6A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="6A" onClick={() => handleSeatClick("6A")}/>
              <label htmlFor="6A">6A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("6B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="6B" onClick={() => handleSeatClick("6B")}/>
              <label htmlFor="6B">6B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("6C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="6C"onClick={() => handleSeatClick("6C")} />
              <label htmlFor="6C">6C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("6D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="6D"onClick={() => handleSeatClick("6D")} />
              <label htmlFor="6D">6D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("6E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="6E" onClick={() => handleSeatClick("6E")}/>
              <label htmlFor="6E">6E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("6F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="6F" onClick={() => handleSeatClick("6F")}/>
              <label htmlFor="6F">6F</label>
            </li>
          </ol>
        </li>
        <li className="row row--7">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("7A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="7A" onClick={() => handleSeatClick("7A")}/>
              <label htmlFor="7A">7A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("7B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="7B" onClick={() => handleSeatClick("7B")}/>
              <label htmlFor="7B">7B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("7C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="7C" onClick={() => handleSeatClick("7C")}/>
              <label htmlFor="7C">7C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("7D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="7D" onClick={() => handleSeatClick("7D")}/>
              <label htmlFor="7D">7D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("7E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="7E" onClick={() => handleSeatClick("7E")}/>
              <label htmlFor="7E">7E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("7F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="7F" onClick={() => handleSeatClick("7F")}/>
              <label htmlFor="7F">7F</label>
            </li>
          </ol>
        </li>
        <li className="row row--8">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("8A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="8A" onClick={() => handleSeatClick("8A")}/>
              <label htmlFor="8A">8A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("8B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="8B" onClick={() => handleSeatClick("8B")}/>
              <label htmlFor="8B">8B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("8C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="8C" onClick={() => handleSeatClick("8C")}/>
              <label htmlFor="8C">8C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("8D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="8D" onClick={() => handleSeatClick("8D")}/>
              <label htmlFor="8D">8D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("8E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="8E" onClick={() => handleSeatClick("8E")}/>
              <label htmlFor="8E">8E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("8F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="8F" onClick={() => handleSeatClick("8F")} />
              <label htmlFor="8F">8F</label>
            </li>
          </ol>
        </li>
        <li className="row row--9">
          <ol className="seats" type="A">
            <li
              className={`seat ${
                isSeatSelected("9A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="9A"onClick={() => handleSeatClick("9A")} />
              <label htmlFor="9A">9A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("9B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="9B"onClick={() => handleSeatClick("9B")} />
              <label htmlFor="9B">9B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("9C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="9C" onClick={() => handleSeatClick("9C")} />
              <label htmlFor="9C">9C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("9D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="9D"onClick={() => handleSeatClick("9D")} />
              <label htmlFor="9D">9D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("9E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="9E" onClick={() => handleSeatClick("9E")}/>
              <label htmlFor="9E">9E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("9F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="9F"onClick={() => handleSeatClick("9F")} />
              <label htmlFor="9F">9F</label>
            </li>
          </ol>
        </li>
        <li className="row row--10">
          <ol className="seats" type="A">
          <li
              className={`seat ${
                isSeatSelected("10A") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="10A" onClick={() => handleSeatClick("10A")}/>
              <label htmlFor="10A">10A</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("10B") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="10B" onClick={() => handleSeatClick("10B")}/>
              <label htmlFor="10B">10B</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("10C") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="10C" onClick={() => handleSeatClick("10C")}/>
              <label htmlFor="10C">10C</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("10D") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="10D" onClick={() => handleSeatClick("10D")}/>
              <label htmlFor="10D">10D</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("10E") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="10E" onClick={() => handleSeatClick("10E")}/>
              <label htmlFor="10E">10E</label>
            </li>
            <li
              className={`seat ${
                isSeatSelected("10F") ? "selected" : ""
              }`}
            >
              <input type="checkbox" id="10F"onClick={() => handleSeatClick("10F")} />
              <label htmlFor="10F">10F</label>
            </li>
          </ol>
          <Link to="/reg">
          <button>BOOK</button>
          </Link>
        </li>
      </ol>
      <div className="exit exit--back"></div>
      <div class="text-left mt-2">
  
</div>
    </div>
    
  )
}
export default Product;  
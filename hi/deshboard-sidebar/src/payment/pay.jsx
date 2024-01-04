import React from "react"
import './pa.css'
import { Link } from "react-router-dom";
const Payment = () => (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
      />
      <div className="wrapper">
        <div className="payment">
          <div className="payment-logo">
            <p>p</p>
          </div>
          <h2>Payment Gateway</h2>
          <div className="form">
            <div className="card space icon-relative">
              <label className="label">Card holder:</label>
              <input type="text" className="input" placeholder="Leo" required/>
              <i className="fas fa-user" />
            </div>
            <div className="card space icon-relative">
              <label className="label">Card number:</label>
              <input
                type="text"
                className="input"
                data-mask="0000 0000 0000 0000"
                placeholder="Card Number"
                required
              />
              <i className="far fa-credit-card" />
            </div>
            <div className="card-grp space">
              <div className="card-item icon-relative">
                <label className="label">Expiry date:</label>
                <input
                  type="text"
                  name="expiry-data"
                  className="input"
                  placeholder="00 / 00"
                  required
                />
                <i className="far fa-calendar-alt" />
              </div>
              <div className="card-item icon-relative">
                <label className="label">CVC:</label>
                <input
                  type="text"
                  className="input"
                  required
                />
                <i className="fas fa-lock" />
              </div>
            </div>
            <Link to='/pay'>
            <div className="btn">Pay</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
  export default Payment;
  
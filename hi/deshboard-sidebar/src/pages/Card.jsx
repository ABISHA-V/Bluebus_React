import React, { Component } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";


class Card extends Component {
  initialState = {
    FROM: "",
    TO: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  commitChange = () => {
    const { FROM, TO } = this.state;
    this.setState({ FROM: TO, TO: FROM });
  };

  onSearch = (name) => {
    this.setState({ FROM: name });
  };

  onSearchh = (name) => {
    this.setState({ TO: name });
  };

  sendCopy = () => {
    const { FROM, TO } = this.state;
    this.props.copiedData({ FROM, TO });
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="flex-container bg-blue-300 rounded-lg -mt-[80px] justify-center items-center"style={{height:500,width:700}}>
        <div className="container border border-white bg-white rounded-xl w-full max-w-md" >
          <h1 className="ml-20 mt-5 text-sm font-bold">
            <a
              href="./search"
              className="text-xl font-semibold underline decoration-2 underline-offset-2 decoration-green-400"
            >
              B
            </a>
            us Ticket Booking.
            <Link to="/productList" className="text-sm font-semibold text-sky-500">
              Travelling with a group? Hire a bus.
            </Link>
            <br></br>
            <br></br>
            <br></br>
            
          </h1>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <div className="h-96 p-14" style={{ marginTop:200,marginRight:50, backgroundColor:"lightblue",padding:20}}>
            <label className="block">
              <span className="block text-lg font-medium text-slate-800 ">
           
            
                From<br></br>
              </span>
              <input
    name="FROM"
    type="text"
    className="peer p-3 rounded-lg w-full bg-gray-300 mt-1 focus:border blue-500 focus:bg-gray-600 focus:outline-offset-0 ml-0"
    style={{ padding:10,width:300}}
    placeholder="Leaving From"
    onChange={this.handleChange}
    value={this.state.FROM}
  />


            </label>

            <div
              className="justify-between content-center mt-5 ml-[12rem]"
              onClick={this.commitChange}
            >
              {" "}
              {<RiArrowLeftRightLine size={30} />}
            </div>

            <label>
              <span className="block text-lg font-medium text-slate-700 ">
                To<br></br>
              </span>
              <input
    name="TO"
    type="text"
    className="p-3 rounded-lg w-full bg-gray-300 mt-2 focus:border blue-700 focus:bg-gray-600 focus:outline-offset-0 ml-100"
    placeholder="Going To"
    style={{ padding:10,width:300}}
    onChange={this.handleChange}
    value={this.state.TO}
  />
            
            </label>
<br></br>
<br></br>
             
            <Link to="/productList" style={{ margin:80}}>Search Bus</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

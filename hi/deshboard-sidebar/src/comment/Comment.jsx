import React from 'react';
import './cc.css'; // Assuming the CSS file is in the same directory as the component

class Comment extends React.Component {
  render() {
    return (
      <section className="about-us">
        <div className="about">
          {/* Uncomment the image tag if you have an image to include */}
          {/* <img src="girl.png" className="pic" alt="About Us" /> */}
          <div className="text">
            <h2>About Us</h2>
            <h5>Bus booking<span> BLUEBUS</span></h5>
            <p>
            Online bus booking platforms have made it incredibly convenient for passengers to plan their journeys. Users can browse schedules, choose preferred routes, and book
            </p>
            
          </div>
        </div>
      </section>
    );
  }
}

export default Comment;

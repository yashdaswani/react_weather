import React from "react";
import "./Cards.css";
import sun from "../sun.png";
import cloud from "../cloud.png"
import rain from "../rain.png"
const Cards = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }} >
      <div
        className="card d-flex justify-content-center align-items-center"
        style={{ width: "18rem" }} >
        <div className="temp-1 d-flex justify-content-center align-items-center" style={{width:"100%"}}> 
          <div className="temperature mx-2 " style={{fontSize:"35px"}}>28°C</div>
          <div className="temp-2 mx-2 ">
          <div className="season">Cloudy</div>
          <div className="location">Haridwar</div>
        </div>
        </div>
        <div className="image">
          <img
            src={sun} alt=""
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
        <div className="time_container d-flex flex-column justify-content-center align-items-center">
          <div className="day">Sun</div>
          <div className="date">06 June 2022</div>
          <div className="time">21:18</div>
        </div>
        <div className="last_container  d-flex flex-row justify-content-center align-items-center" style={{padding:"2rem"}}>
        <div className="future weather d-flex flex-column justify-content-center align-items-center">
          <div className="future_time"style={{fontSize:"12px"}}>Now</div>
          <div className="future_img">
            <img
              src={cloud} alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <div className="future_temp">28°C</div>
        </div> <div className="future weather d-flex flex-column justify-content-center align-items-center">
          <div className="future_time"style={{fontSize:"12px"}}>09:00</div>
          <div className="future_img">
            <img
              src={sun} alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <div className="future_temp">26°C</div>
        </div> <div className="future weather d-flex flex-column justify-content-center align-items-center">
          <div className="future_time"style={{fontSize:"12px"}}>10:00</div>
          <div className="future_img">
            <img
              src={rain} alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
           <div className="future_temp">30°C</div>
        </div> <div className="future weather d-flex flex-column justify-content-center align-items-center">
          <div className="future_time"style={{fontSize:"12px"}}>11:00</div>
          <div className="future_img">
            <img
              src={cloud} alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <div className="future_temp">28°C</div>
        </div> <div className="future weather d-flex flex-column justify-content-center align-items-center">
          <div className="future_time"style={{fontSize:"12px"}}>12:00</div>
          <div className="future_img">
            <img
              src={rain} alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <div className="future_temp">28°C</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;

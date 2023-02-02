import React from "react";
import "./hotel.scss";
import { RiStarSFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Geocode from "react-geocode";
const Hotel = () => {
  navigator.geolocation.getCurrentPosition((pos) => {});

  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <>
      <section className="side__menu">
        <div className="side__menu-images">
          <figure>
            <img src="img/hotel-1.jpg" alt="" />
          </figure>
          <figure>
            <img src="img/hotel-2.jpg" alt="" />
          </figure>
          <figure>
            <img src="img/hotel-3.jpg" alt="" />
          </figure>
        </div>
        <div className="heading">
          <div className="upper">
            <h1>Hotel Las Palmas</h1>
            <aside>
              <RiStarSFill className="icon-star" />
              <RiStarSFill className="icon-star" />
              <RiStarSFill className="icon-star" />
              <RiStarSFill className="icon-star" />
              <RiStarSFill className="icon-star" />
            </aside>
          </div>
          <div className="location">
            <p>
              <MdLocationOn className="location-icon" />
              <a href="">Alberia, Portugal</a>
            </p>
            <p className="sidebar">
              <span>8.6</span> <span className="counts">429 votes</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotel;

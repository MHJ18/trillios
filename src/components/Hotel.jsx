import React from "react";
import "./hotel.scss";
import { RiStarSFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Geocode from "react-geocode";
import CTA from "./CTA";
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
  const date = new Date();
  console.log(date);
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
        <section className="cta-user">
          <div className="cta-flex">
            <div className="cta-flex-left">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi autem, doloribus dolores beatae nesciunt vel, laudantium
                esse consequuntur laboriosam, soluta voluptas quam iure deserunt
                ut praesentium magni ea rem cupiditate!.
              </p>
              <p className="last">
                supera is ipsum dolor sit amet consectetur adipisicing elit.
                Odit tempora reprehenderit error placeat labore saepe possimus
                porro delectus.
              </p>
              <div className="list">
                <ul className="list-container">
                  <li className="list-items">Close to the beach</li>
                  <li className="list-items">Breakfast included</li>
                  <li className="list-items">Free wirport shuttle</li>
                  <li className="list-items">Free wifi in all rooms</li>
                  <li className="list-items">Air conditioning and headting </li>
                  <li className="list-items">Pets allowed</li>
                  <li className="list-items">We speak all languages</li>
                  <li className="list-items">Perfect for families</li>
                </ul>
              </div>
              <div className="review">
                <p className="recomend">
                  Lucy and her 3 other friends recommended this hotel
                </p>
                <div className="users">
                  <img src="/img/user-5.jpg" alt="" />
                  <img src="/img/user-2.jpg" alt="" />
                  <img src="/img/user-3.jpg" alt="" />
                  <img src="/img/user-4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="cta-flex-right">
              <div className="first-block">
                <p className="first-block-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  aspernatur assumenda iure corrupti odit est rerum. Provident
                  inventore.
                </p>
                <div className="first-block-detail">
                  <div className="image">
                    <img src="/img/user-1.jpg" alt="" />
                    <div className="image-text">
                      <p className="user">Nick smith</p>
                      <p className="date">Feb 23,2017</p>
                    </div>
                    <div className="score">7.8</div>
                  </div>
                </div>
              </div>
              <div className="first-block">
                <p className="first-block-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  aspernatur assumenda iure corrupti odit est rerum. Provident
                  inventore.
                </p>
                <div className="first-block-detail">
                  <div className="image">
                    <img src="/img/user-6.jpg" alt="" />
                    <div className="image-text">
                      <p className="user">mary thomas</p>
                      <p className="date">Sep 13,2016</p>
                    </div>
                    <div className="score">9.3</div>
                  </div>
                </div>
              </div>
              <a href="flights" className="btn">
                Show all &rarr;
              </a>
            </div>
          </div>
        </section>
        <CTA />
      </section>
    </>
  );
};

export default Hotel;

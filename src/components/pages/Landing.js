import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";

import bg1 from "../../assets/bg/bg1.jpeg";
import bg2 from "../../assets/bg/bg2.jpg";
import bg3 from "../../assets/bg/bg3.jpg";
import bg4 from "../../assets/bg/bg4.jpg";


export default function Landing() {
  return (
    <div className="page">
      <Navbar />

      <div id="carouselLandingImages" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselLandingImages" data-slide-to="0" className="active"></li>
          <li data-target="#carouselLandingImages" data-slide-to="1"></li>
          <li data-target="#carouselLandingImages" data-slide-to="2"></li>
          <li data-target="#carouselLandingImages" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ bg1 } class="d-block w-100" alt="landing-img-surfing" />
            <div className="carousel-caption d-none d-md-block">
              <Link to="/products"><button type="button" class="btn btn-danger btn-lg">BOOK NOW</button></Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={ bg2 } className="d-block w-100" alt="landing-img-surfing" />
            <div className="carousel-caption d-none d-md-block">
              <Link to="/products"><button type="button" class="btn btn-danger btn-lg">BOOK NOW</button></Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={ bg3 } className="d-block w-100" alt="landing-img-surfing" />
            <div className="carousel-caption d-none d-md-block">
              <Link to="/products"><button type="button" class="btn btn-danger btn-lg">BOOK NOW</button></Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={ bg4 } className="d-block w-100" alt="landing-img-surfing" />
            <div className="carousel-caption d-none d-md-block">
              <Link to="/products"><button type="button" class="btn btn-danger btn-lg">BOOK NOW</button></Link>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselLandingImages" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselLandingImages" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </div>
  );
}

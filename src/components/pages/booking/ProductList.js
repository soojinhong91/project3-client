import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../layout/Navbar";
import server from "../../constants";

import landing1 from "../../../assets/landing/landing1.jpg";
import landing2 from "../../../assets/landing/landing2.jpg";
import landing3 from "../../../assets/landing/landing3.jpg";

const SERVER_PRODUCTLIST = server('products');

export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };

    const fetchProduct = () => {
      axios.get(SERVER_PRODUCTLIST).then( (res) => {
        console.log('test', res)
        this.setState({categories: res.data});
      })
    }
    fetchProduct();
  }

  render() {
    return(
      <div className="page">
        <Navbar />
        <h1>Online Booking</h1>

        <div className="row row-cols-1 row-cols-md-3" id="productlist-deck">
          <div className="card" id="productlist-card">
            <Link to="/boards">
              <img
                src={ landing1 }
                className="card-img-top"
                id="productlist-cardImg"
                alt="surfing"
              />
              <div className="card-body">
                <h5 className="card-title" id="productlist-title">Boards</h5>
              </div>
            </Link>
          </div>

          <div className="card" id="productlist-card">
            <Link to="/gears">
              <img
                src={ landing2 }
                className="card-img-top"
                id="productlist-cardImg"
                alt="snokelling"
              />
              <div className="card-body">
                <h5 className="card-title" id="productlist-title">Gears</h5>
              </div>
            </Link>
          </div>

          <div className="card" id="productlist-card">
            <Link to="/beaches">
              <img
                src={ landing3 }
                className="card-img-top"
                id="productlist-cardImg"
                alt="sunbathing"
              />
              <div className="card-body">
                <h5 className="card-title" id="productlist-title">Beach Items</h5>
              </div>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

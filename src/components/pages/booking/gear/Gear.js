import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../../layout/Navbar";
import ProductTab from "../../../layout/ProductTab";
import GearItem from "./GearItem";

import server from "../../../constants";

const SERVER_GEARS = server('gears');

export default class Gear extends Component {
  constructor() {
    super();
    this.state = {
      geartypes: []
    };

    const fetchGear = () => {
      axios.get(SERVER_GEARS).then((res) => {
        console.log('testgear', res)
        this.setState({ geartypes: res.data })
      })
    }
    fetchGear();
  }

  render() {
    return (
      <div className="page">
        <Navbar />
        <h1>Gears</h1>
        <ProductTab />
        <div id="item-deck">
          {this.state.geartypes.map((g) =>
            <Link to={ `/gears/${ g._id }`}>
              <GearItem data={ g } />
            </Link>
          )}
        </div>
      </div>
    );
  }
}

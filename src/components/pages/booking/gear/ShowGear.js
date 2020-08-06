import React, { Component } from "react";
import axios from 'axios';

import Navbar from "../../../layout/Navbar";
import ProductTab from "../../../layout/ProductTab";
import Calendar from "../Calendar";

import server from "../../../constants";

const SERVER_GEARS = server('gears');

export default class ShowGear extends Component {
  constructor(props) {
    super();
    this.state = {
      geartypes: []
    };

    const fetchGear = () => {
      axios.get(SERVER_GEARS + props.match.params.gearId ).then((res) => {
        console.log('testgear', res)
        this.setState({ geartypes: [res.data] })
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
        { this.state.geartypes.map((g) => (
          <div className="showpage">
            <div className="showpage-img"><img src={ g.image } alt={ g.geartype }  className="big-image" /></div>
            <div className="showpage-text">
              <h4>{ g.geartype }</h4>
              <h4>${ g.price }</h4>
              <div className="showpage-input">
                <h6>Qty:<input type="number" required/></h6>
                <div className="calendar">
                  <h6>Date:<Calendar /></h6>
                </div>
                <h6>Hours:<input type="number" required/></h6>
              </div>
              <div className="button"><button type="button" class="btn btn-outline-info">Book</button></div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}

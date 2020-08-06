import React, { Component } from "react";
import axios from 'axios';

import Navbar from "../../../layout/Navbar";
import ProductTab from "../../../layout/ProductTab";
import Calendar from "../Calendar";

import server from "../../../constants";

const SERVER_BEACHES = server('beaches');

export default class ShowBeach extends Component {
  constructor(props) {
    super();
    this.state = {
      beachitems: []
    };

    const fetchBeach = () => {
      axios.get(SERVER_BEACHES + props.match.params.beachId ).then((res) => {
        console.log('showbeach', res.data)
        this.setState({ beachitems: [res.data] })
      })
    }
    fetchBeach();
  }

  render() {
    return (
      <div className="page">
        <Navbar />
        <h1>Beach Items</h1>
        <ProductTab />
        { this.state.beachitems.map((b) => (
          <div className="showpage">
            <div className="showpage-img"><img src="" alt={"b.beachitem"}/></div>

            <div className="showpage-text">
              <h4>{ b.beachitem }</h4>
              <h4>${ b.price }</h4>
              <div className="showpage-input">
                <h6>Qty:<input type="number" required/></h6>
                <div className="calendar">Date:<Calendar /></div>
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

// need to refector without map

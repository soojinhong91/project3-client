import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../../layout/Navbar";
import ProductTab from "../../../layout/ProductTab";
import BeachItem from "./BeachItem";

import server from "../../../constants";

const SERVER_BEACHES = server('beaches');

export default class Beach extends Component {
  constructor() {
    super();
    this.state = {
      beachitems: []
    };

    const fetchBeach = () => {
      axios.get(SERVER_BEACHES).then((res) => {
        console.log('testbeach', res)
        this.setState({ beachitems: res.data })
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
        {this.state.beachitems.map((b) =>
          <Link to={ `/beaches/${ b._id }`}>
            <BeachItem data={ b } />
          </Link>
        )}
      </div>
    );
  }
}

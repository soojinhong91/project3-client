import React, { Component } from "react";
import axios from 'axios';

import Navbar from "../../../layout/Navbar";
import ProductTab from "../../../layout/ProductTab";
import Calendar from "../Calendar";

import server from "../../../constants";

const SERVER_BOARDS = server('boards');

export default class ShowBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      boardtypes: []
    };

    const fetchBoard = () => {
      axios.get(SERVER_BOARDS + props.match.params.boardId ).then((res) => {
        console.log('testboard', res.data)
        this.setState({ boardtypes: [res.data] })
      })
    }
    fetchBoard();
  }

  render() {
    return (
      <div className="page">
        <Navbar />
        <h1>Boards</h1>
        <ProductTab />
        { this.state.boardtypes.map((b) => (
          <div className="showpage">
            <div className="showpage-img"><img src={ b.image } alt={ b.boardtype } className="big-image" /></div>

            <div className="showpage-text">
              <h4>{ b.boardtype }</h4>
              <h4>${ b.price }</h4>
              <div className="showpage-input">
                <h6>Qty:<input type="number" required/></h6>
                <div className="calendar">
                  <h6>Date: <Calendar /></h6>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from "../../../layout/Navbar";
import ProductTab from "../../../layout/ProductTab";
import BoardItem from "./BoardItem"

import server from "../../../constants";

const SERVER_BOARDS = server('boards');

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      boardtypes: []
    };

    const fetchBoard = () => {
      axios.get(SERVER_BOARDS).then((res) => {
        console.log('testboard', res)
        this.setState({ boardtypes: res.data })
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
        <div id="item-deck">
          {this.state.boardtypes.map((b) =>
            <Link to={`/boards/${ b._id }`}>
              <BoardItem data={ b } />
            </Link>
          )}
        </div>
      </div>
    );
  }
}

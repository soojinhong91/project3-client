import React, { Component } from "react";

export default class BoardItem extends Component {
  render(props) {
    const { boardtype, price, image } = this.props.data;
    console.log(this.props.data)
    return(
        <div className="card" id="itemlist">
          <img
            src=""
            className="card-img-top"
            id="itemImg"
            alt="boardItems"
          />
          <div className="card-body">
            <h3>{ boardtype }</h3>
            <h4>${ price }</h4>
          </div>
        </div>
    )
  }
}

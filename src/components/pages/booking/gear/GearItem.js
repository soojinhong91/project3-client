import React, { Component } from "react";

export default class GearItem extends Component {
  render(props) {
    const { geartype, price, image } = this.props.data;
    console.log(this.props.data)
    return(
        <div className="card" id="itemlist">
          <img
            src=""
            className="card-img-top"
            id="itemImg"
            alt="gearItems"
          />
          <div className="card-body">
            <h3>{ geartype }</h3>
            <h4>${ price }</h4>
          </div>
        </div>
    )
  }
}

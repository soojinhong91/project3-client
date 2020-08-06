import React, { Component } from "react";

export default class BeachItem extends Component {
  render(props) {
    const { beachitem, price, image } = this.props.data;
    console.log(this.props.data)

    return(
        <div className="card" id="itemlist">
          <img
            src=""
            className="card-img-top"
            id="itemImg"
            alt="beachItems"
          />
          <div className="card-body">
            <h3>{ beachitem }</h3>
            <h4>${ price }</h4>
          </div>
        </div>
    )
  }
}

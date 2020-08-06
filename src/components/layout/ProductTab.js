import React from "react";
import { Link } from "react-router-dom";

export default function ProductTab() {
  return (
    <nav id="product-tab">
      <Link to="/boards"><h6>Boards</h6></Link>
      <Link to="/gears"><h6>Gear</h6></Link>
      <Link to="/beaches"><h6>Beach Items</h6></Link>
    </nav>
  )
}

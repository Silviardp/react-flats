import React, { Component } from "react";

import flats from "../../data/flat";
import Flat from "./flat";

export class app extends Component {
  render() {
    return (
      <div>
        <Flat />
      </div>
    );
  }
}

export default app;

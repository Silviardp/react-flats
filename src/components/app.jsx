import React, { Component } from "react";

import flats from "../../data/flat";
import Flat from "./flat";
import FlatList from "./flat_list";
import Marker from "./marker";

export class app extends Component {
  render() {
    return (
      <div>
        <Flat />
        <FlatList />
        <Marker />
      </div>
    );
  }
}

export default app;

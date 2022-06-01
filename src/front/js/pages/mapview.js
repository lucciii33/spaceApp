import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import GoogleMapReact from "google-map-react";
import { Map } from "../component/map";

export const MapView = () => {
  
  
  const params = useParams();
  return (
    <div>
      <Map/>
    </div>
  );
};

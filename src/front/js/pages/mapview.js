import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";
import { Map } from "../component/map";

export const MapView = ({ data }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div>
      <Map />
    </div>
  );
};

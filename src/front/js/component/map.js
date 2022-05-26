import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { defaultProps } from "google-map-react";
import GoogleMapReact from "google-map-react";
import { LocationMarket } from "./locationmarket";

export const Map = ({ center, zoom }) => {

  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpH1Rq_Gh0_B7nT9sUuc8VQWKNTXKFAbY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarket lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 4,
};

Map.propTypes = {
  match: PropTypes.object,
};

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaSatellite } from "react-icons/fa";



export const LocationMarket = ({ lat, lng }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="locationMarket">
            <FaSatellite className="icon" />
        </div>
    );
};


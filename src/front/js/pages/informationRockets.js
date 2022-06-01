
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = ({ data }) => {
    const { store, actions } = useContext(Context);
    var data = useLocation().state;
    return (
        <div className="container">
            <p>funciona{data.value3}</p>
            <img src={data.value1}></img>
            <img src={data.value4}></img>
            <img src={data.value5}></img>
        </div>
    );
};


import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = ({ data }) => {
    const { store, actions } = useContext(Context);
    var data = useLocation().state;
    return (
        <div className="container">
            <div className="d-flex">
                <div className="mt-5 m-3">
                    <h2>{data.value3}</h2>
                    <p>{data.value6}</p>
                    <p>{data.value2}</p>
                </div>
                <div>
                    <img src={data.value1} className="imagerockets"></img>
                </div>
            </div>

            <div className="d-flex">

                <div>
                    <img src={data.value5} className="imagerockets"></img>
                </div>
                <div className="mt-5 m-3">
                    <h2>contry:{data.value9}</h2>
                    <p>cost per lanch:{data.value7}</p>
                    <p>mass:{data.value8}</p>
                </div>
            </div>

            <div className="d-flex rocketleft">

                <div className="mt-5 m-3">
                    <p>diameter (feet): {data.value10}</p>
                    <p>diameter (meters):{data.value11}</p>
                </div>
                <div>
                    <img src={data.value4} className="imagerockets"></img>
                </div>

            </div>





        </div>
    );
};

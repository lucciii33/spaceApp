
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
                <div className="mt-5 m-3 pt-5">
                    <h2>{data.value9}</h2>
                    <p>Cost per lanch: {data.value7}</p>
                    <p>First stage burn: {data.value12}</p>
                    <p>Engines: {data.value13}</p>
                    <p>fuel_amount_tons: {data.value14}</p>
                    <p>first_flight: {data.value17}</p>

                </div>
            </div>

            <div className="d-flex rocketleft">

                <div className="mt-5 m-3 ms-5">
                    <h2>Diameter</h2>
                    <p> feet: {data.value10}</p>
                    <p>meters: {data.value11}</p>
                    <h2>Height</h2>
                    <p> feet: {data.value15}</p>
                    <p>meters: {data.value16}</p>
                    <h2>Mass</h2>
                    <p>{data.value8}</p>
                </div>
                <div>
                    <img src={data.value4} className="imagerockets"></img>
                </div>

            </div>





        </div>
    );
};

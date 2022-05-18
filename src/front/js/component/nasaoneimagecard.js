import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const NasaOneImageCard = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [colorButton, setColorButton] = useState("button-25");
    return (
        <div className="m-2">
            <img src={props.data?.hdurl} className="oneimagenasa"></img>
            <h3>{props.data.title}</h3>
            <h3>{props.data.date}</h3>
            <p className="m-2 p-2"><strong className="text-white">explanation: </strong> {props.data?.explanation}</p>

        </div>
    );
};

NasaOneImageCard.propTypes = {
    match: PropTypes.object
};
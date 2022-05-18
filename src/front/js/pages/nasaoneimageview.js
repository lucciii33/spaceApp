import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { NasaOneImageCard } from "../component/nasaoneimagecard";

export const NasaOneImageView = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>

            <div>
                <h1>
                    This all the rockets that spacex created
                </h1>
                <p>check what you want</p>
            </div>
            <NasaOneImageCard data={store.nasaOneImageArray} />
        </div>
    );
};
NasaOneImageView.propTypes = {
    match: PropTypes.object
};
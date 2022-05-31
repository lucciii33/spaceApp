import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { NasaOneImageCard } from "../component/nasaoneimagecard";

export const NasaOneImageView = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="bg-nasaoneimage">

            <div>
                <h1 className="text-center text-white">
                    INFORMATION FROM THE NASA
                </h1>

            </div>
            <NasaOneImageCard data={store.nasaOneImageArray} />
        </div>
    );
};
NasaOneImageView.propTypes = {
    match: PropTypes.object
};
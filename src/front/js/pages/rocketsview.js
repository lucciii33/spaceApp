import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RocketCard } from "../component/rocketscard";

export const RocketsView = ({ data }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div>

            <div>
                <h1>
                    This all the rockets that spacex created
                </h1>
                <p>check what you want</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {store.rocketsArray.map((rocket, index) => <RocketCard data={{
                    value1: rocket.flickr_images[1],
                    value2: rocket.company,
                    value3: rocket.name,
                }}
                    key={index}
                />)}
            </div>
        </div>
    );
};
RocketsView.propTypes = {
    match: PropTypes.object
};
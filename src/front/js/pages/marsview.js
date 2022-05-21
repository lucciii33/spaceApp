import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RocketCard } from "../component/rocketscard";
import { MarsCard } from "../component/marscard";

export const MarsView = ({ data }) => {
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
                {store.marsone.map((item, index) => <MarsCard data={{
                    value1: item.img_src,
                    // value2: item.company,
                    // value3: item.name,
                }}
                    key={index}
                />)}
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {store.marstwo.map((item, index) => <MarsCard data={{
                    value1: item.img_src,
                    // value2: item.company,
                    // value3: item.name,
                }}
                    key={index}
                />)}
            </div>
        </div>
    );
};
MarsView.propTypes = {
    match: PropTypes.object
};
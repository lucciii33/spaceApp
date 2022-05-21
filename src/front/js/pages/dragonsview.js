import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DragonsCard } from "../component/dragonscard";
export const DragonsView = ({ data }) => {
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
                {store.dragonsArray.map((dragon, index) => <DragonsCard data={{
                    value1: dragon.flickr_images[0],
                    value2: dragon.type,
                    value3: dragon.name,
                    value4: dragon.dev_partner,
                }}
                    key={index}
                />)}
            </div>
        </div>
    );
};
DragonsView.propTypes = {
    match: PropTypes.object
};
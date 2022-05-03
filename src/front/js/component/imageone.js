import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/image1.jpg";
import { Navbar } from "./navbar";


export const ImageOne = () => {
	return (

		<Parallax className="image" blur={0} bgImage={image1} bgImageAlt="the cat" strength={200}>
			<div className="align-baseline">
				<a className="links m-2">rockets</a>
				<a className="links m-2">satelites</a>
				<a className="links m-2">rockets</a>
				<a className="links m-2">satelites</a>
			</div>
			<div className="content">

				<div className="center">

					<h1>Are you ready?</h1>
					<h6>Lets fly to space</h6>
					<button type="button" class="btn btn-outline-light">Light</button>

				</div>
			</div>
		</Parallax>
	);
};

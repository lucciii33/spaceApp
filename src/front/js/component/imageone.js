import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/image1.jpg";
import { Navbar } from "./navbar";
import { AiOutlineDown } from "react-icons/ai";


export const ImageOne = () => {
	return (

		<Parallax className="image" blur={0} bgImage={image1} bgImageAlt="the cat" strength={400}>
			<div className="align-baseline nav1 mt-2">
				<a className="links m-2">rockets</a>
				<a className="links m-2">satelites</a>
				<a className="links m-2">rockets</a>
				<a className="links m-2">satelites</a>
			</div>
			<div className="content">

				<div className="centerMars">

					<h1>Are you ready?</h1>
					<h6>Lets fly to space</h6>
					<div>

						<button type="button" class="btn btn-outline-light">Light</button>
					</div>

				</div>
			</div>
			<div class="con1">
				<div class="chevron"></div>
				<div class="chevron"></div>
				<div class="chevron"></div>
				<span class="text">Scroll down</span>
			</div>
		</Parallax>
	);
};

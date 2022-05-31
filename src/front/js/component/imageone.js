import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/image1.jpg";
import { Navbar } from "./navbar";
import { AiOutlineDown } from "react-icons/ai";


export const ImageOne = () => {
	return (
		<Parallax className="image" blur={0} bgImage={image1} strength={400}>
			<div className="align-baseline nav1 mt-2">
				<a className="links m-2">rockets</a>
				<a className="links m-2">Falcons</a>
				<a className="links m-2">ISS</a>
				<a className="links m-2">NASA</a>
			</div>
			<div className="d-grid m-0">
				<div className="content d-grid ">

					<div className="centerMars">

						<h1>Astronomy Picture of the Day.</h1>
						<p>did you know that every day nasa uploads curious facts about what happens today in space</p>
						<div>

							<Link to="/nasaoneimageview"><button type="button" class="btn btn-outline-light">Nasa Facts</button></Link>
						</div>

					</div>
					<div class="con1">
						<div class="chevron"></div>
						<div class="chevron"></div>
						<div class="chevron"></div>
						<span class="text">Scroll down</span>
					</div> *
					{/* <div>hi</div> */}
				</div>

			</div>


		</Parallax>

	);
};

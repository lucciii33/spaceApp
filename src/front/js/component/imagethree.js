import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image3 from "../../img/image3.jpg";


export const ImageThree = () => {
	return (
		<Parallax className="image" blur={0} bgImage={image3} bgImageAlt="the cat" strength={600}>
			<div className="content">
				<img src=""></img>
				<div className="centerMars">

					<h1>there is a robot in mars</h1>
					<h6>here you can see photos taked by the robot </h6>
					<button type="button" class="btn btn-outline-dark">Light</button>

				</div>
			</div>
		</Parallax>
	);
};

import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image4 from "../../img/image4.jpg";


export const ImageFour = () => {
	return (
		<Parallax className="image" blur={1} bgImage={image4} bgImageAlt="the cat" strength={400}>
			<div className="content">
				<img src=""></img>
				<div className="center">

					<h1>there is a robot in mars</h1>
					<h6>here you can see photos taked by the robot </h6>
					<button type="button" class="btn btn-outline-dark">Light</button>

				</div>
			</div>
		</Parallax>
	);
};

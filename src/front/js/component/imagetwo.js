import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image2 from "../../img/image2.jpg";
import rocket from "../../img/rocket1.png";


export const ImageTwo = () => {
	return (
		<Parallax className="image" blur={0} bgImage={image2} bgImageAlt="the cat" strength={200}>
			<div className="content">
				<img src=""></img>
				<div className="center">

					<h1>Are you ready?</h1>
					<h6>Lets fly to space</h6>

				</div>
			</div>
			<div>
				<img className="rocket" src={rocket}></img>
			</div>
		</Parallax>
	);
};

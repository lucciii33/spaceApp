import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image4 from "../../img/image4.jpg";


export const ImageFour = () => {
	return (
		<Parallax className="image" blur={0} bgImage={image4} bgImageAlt="the cat" strength={400}>
			<div className="centerMars4">
				<div className="center">

					<h2>Did you know there is a robot on mars taking pictures?</h2>
					<h4>it's called Curiosity</h4>
					<p>The Mars rover Curiosity is not just one of the cutest robots you’ll ever see, but also an important part of NASA’s exploration of Mars. Since it touched down on the red planet on August 5, 2012, Curiosity has worked diligently – collecting rock samples & taking well over 300,000 images of Mars. </p>
					<Link to="/marsview"><button type="button" class="btn btn-outline-light">see photos in mars</button></Link>

				</div>
			</div>
		</Parallax>
	);
};

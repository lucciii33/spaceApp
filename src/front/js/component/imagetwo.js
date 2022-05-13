import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image2 from "../../img/image2.jpg";
import rocket from "../../img/rocket1.png";


export const ImageTwo = () => {
	return (
		<Parallax className="image" blur={0} bgImage={image2} bgImageAlt="the cat" strength={400}>
			<div className="content">
				<img src=""></img>
				<div className="centerMars2">

					<h3>Check all the rocket that spacex created</h3>
					<h6>you will love it!</h6>
					<div>

						<Link to="/rocketsview">
							<button type="button" class="btn btn-outline-dark">Light</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="d-flex">

				<div>
					<img className="rocket" src={rocket}></img>
				</div>
			</div>
		</Parallax>
	);
};

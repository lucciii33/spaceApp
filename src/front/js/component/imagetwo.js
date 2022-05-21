import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image2 from "../../img/image2.jpg";
import rocket from "../../img/rocket1.png";


export const ImageTwo = () => {
	return (
		<Parallax className="image" blur={0} bgImage={image2} bgImageAlt="the cat" strength={500}>
			{/* <div className="animation">
				<div className="d-flex">

					<div>
						<img className="rocket" src={rocket}></img>
					</div>
				</div>
			</div> */}
			<div className="content1">
				<div className="centerMars2 me-auto m-5">

					<h3>Discover all the rockets that spacex has created.</h3>
					<p>SpaceX, in full Space Exploration Technologies Corporation, American aerospace company founded in 2002 that helped usher in the era of commercial spaceflight. It was the first private company to successfully launch and return a spacecraft from Earth orbit and the first to launch a crewed spacecraft and dock it with the International Space Station (ISS). Headquarters are in Hawthorne, California.</p>
					<div>

						<Link to="/rocketsview">
							<button type="button" class="btn btn-outline-dark">See Rockets</button>
						</Link>
					</div>
				</div>

				<div className="centerMars3">
					<h4>See falcons</h4>
					<p>Discover what they are for</p>
					<Link to="/dragonsview">
						<button type="button" class="btn btn-outline-dark">See Dragons</button>
					</Link>
				</div>
			</div>
		</Parallax>
	);
};

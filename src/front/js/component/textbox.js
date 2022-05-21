import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/image1.jpg";

export const TextBox = () => {
	return (
		<div className="textbox m-0">
			<h1>Margaret Mead</h1>
			<p><i className="fas fa-quote-left"></i> We are at a point in history where a proper attention to space, and especially near space, may be absolutely crucial in bringing the world together. <i className="fas fa-quote-right"></i></p>
		</div>
	);
};

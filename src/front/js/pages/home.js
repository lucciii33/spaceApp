import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Parallax } from 'react-parallax';
import { ImageOne } from "../component/imageone";
import { ImageTwo } from "../component/imagetwo";
import { TextBox } from "../component/textbox";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<ImageOne />
			<TextBox />
			<ImageTwo />
		</div>
	);
};

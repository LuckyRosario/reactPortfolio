import React from "react";
import About from "./about.js";
import Navigation from "./nav";
import Hero from "./hero.js";

//create your first component
const Home = () => {
	return (
		<div>
			<Navigation />
			<Hero />
			<About />
		</div>
	);
};

export default Home;

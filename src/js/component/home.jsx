import React from "react";
import About from "./about.js";
import Navigation from "./nav";
import Hero from "./hero.js";
import Projects from "./projects.js";
import Footer from "./footer.js";

//create your first component
const Home = () => {
	return (
		<div>
			<Navigation />
			<Hero />
			<About />
			<Projects />
			<Footer />
		</div>
	);
};

export default Home;

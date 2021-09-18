import React from "react";
import "../../styles/nav.scss";
import Fade from "react-reveal/Fade";

const Hero = () => {
	return (
		<div className="section hero-area w-100">
			<div className="hero-text">
				<h1>Pamela Rosario</h1>
				<h3>Frontend Developer</h3>
				<div className="button">
					<a href="#About_Me">About Me</a>
				</div>
			</div>
			<Fade top cascade>
				<div className="socials d-flex flex-column">
					<div>
						<a href="https://www.instagram.com/luckylady3ug/">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/pamela-rosario-6a802ba2/">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
					<div>
						<a href="https://github.com/LuckyRosario">
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Hero;

import React from "react";
import "../../styles/nav.scss";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Image from "./image.jpg";

const About = () => {
	return (
		<section className="sub-section pb-5 pe-0 d-block d-lg-flex">
			<div className="container">
				<div className="row">
					<div className="col">
						<Zoom>
							<h2 id="About_Me">About Me</h2>
							<p className="about mt-5">
								I was born in Bronx, Ny and have been residing
								in Florida since the age of 9. I currently live
								in Boca Raton, FL. However, I would not mind
								relocating for the right position. I have always
								loved the internet and feel very priviledged to
								have the creative skills to develop websites. I
								know several languauges such as HTML5, CSS,
								Javascript, and React. Take a peek at my
								projects and leave your contact info below
								please.
							</p>
						</Zoom>
					</div>
					<div className="col ms-5 information">
						<Zoom>
							<img
								src={Image}
								className=" headshot border border-secondary rounded-circle shadow-lg mt-3"
								alt="Pamela Rosario"
							/>
						</Zoom>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

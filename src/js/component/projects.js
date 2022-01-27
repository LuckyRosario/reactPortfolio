import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import "../../styles/nav.scss";
import Zoom from "react-reveal/Zoom";
import Blog from "./project1.png";
import App from "./project2.png";
import Meme from "./meme_generator.png";

const Projects = () => {
	return (
		<section>
			<Container>
				<h1 className="m-5 text-center" id="Projects">
					Projects
				</h1>
				<Zoom>
					<div>
						<CardGroup className="m-5">
							<Card>
								<Card.Img variant="top" src={Blog} />
								<Card.Body>
									<Card.Title>Star Wars Blog</Card.Title>
									<Card.Text>
										I used React.js to build this project. I
										used the router for the different pages.
										It includes information from an API
										about the characters and planets. It
										also includes a favorites list, which
										the user can assign either people or
										planets to.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<a
										className="github btn btn-light rounded-pill"
										href="https://github.com/LuckyRosario/card_star_wars">
										Github
									</a>
								</Card.Footer>
							</Card>

							<Card>
								<Card.Img variant="top" src={App} />
								<Card.Body>
									<Card.Title>Voting App</Card.Title>
									<Card.Text>
										I built this application using React.js.
										It is designed for coporate use. You can
										create users as well as assign roles.
										Administrators can create voting events.
										Users vote and can view results
										displayed in a real time chart. Also
										displays account information and budget.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<a
										className="github btn btn-light rounded-pill"
										href="https://github.com/ingindIsrael/Votingapp_coopwork">
										Github
									</a>
								</Card.Footer>
							</Card>

							<Card>
								<Card.Img variant="top" src={Meme} />
								<Card.Body>
									<Card.Title>
										Meme Generator Application
									</Card.Title>
									<Card.Text>
										I created this React application to
										generator random images which allow for
										text to be added. Check out the live
										site and try it yourself!
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<a
										className="github btn btn-light rounded-pill"
										href="https://spiveywifey.com/">
										Live Application
									</a>
								</Card.Footer>
							</Card>
						</CardGroup>
					</div>
				</Zoom>
			</Container>
		</section>
	);
};

export default Projects;

import React from "react";
import Container from "react-bootstrap/Container";
import "../../styles/nav.scss";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
	return (
		<Zoom>
			<footer className="contact">
				<h2 className="text-center pt-3" id="Contact_Me">
					Contact Me
				</h2>
				<Container className="container align-items-center">
					<form
						className="h-100 mx-auto"
						action="https://formsubmit.co/p.rosario684@gmail.com"
						method="POST">
						<input
							type="hidden"
							name="_subject"
							value="New submission!"
						/>
						<div className="form-floating">
							<input
								type="email"
								name="email"
								className="form-control"
								id="floatingInputGrid"
								required
							/>
							<label htmlFor="floatingInputGrid">
								Email Address
							</label>
						</div>
						<div className="form-floating">
							<input
								type="text"
								name="name"
								className="form-control"
								id="floatingInputGrid"
								required
							/>
							<label htmlFor="floatingInputGrid">Name</label>
						</div>
						<div className="form-floating">
							<input
								type="text"
								name="message"
								className="form-control"
								id="floatingTextarea"
								required
							/>
							<label htmlFor="floatingTextarea">Message</label>
						</div>
						<input
							type="hidden"
							name="_autoresponse"
							value="I have recieved your message and will get back to you as soon as possible"
						/>
						<button
							className="btn-md rounded-pill mt-3 ml-3 mb-3"
							type="submit">
							Send
						</button>
					</form>
				</Container>
			</footer>
		</Zoom>
	);
};

export default Footer;

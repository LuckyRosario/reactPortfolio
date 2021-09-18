import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../styles/nav.scss";
import Logo from "./logo.png";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

const Navigation = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg">
				<Container>
					<RubberBand>
						<Navbar.Brand href="#home">
							<img
								className="logo"
								style={{ width: "auto", height: "100px" }}
								src={Logo}
								alt="Logo"
							/>
						</Navbar.Brand>
					</RubberBand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Fade left>
								<Nav.Link href="#Projects">Projects</Nav.Link>
							</Fade>
							<Fade left>
								<Nav.Link href="#Contact_Me">Contact</Nav.Link>
							</Fade>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;

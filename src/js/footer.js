import React from "react";
import Container from "react-bootstrap/Container";
import "../../styles/nav.scss";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
	return (
        <Zoom>
            <footer className="contact">
            <h2 class="text-center pt-3" id="Contact_Me">Contact Me</h2>
        <Container className="container align-items-center">
            <form class="h-100 mx-auto" action="https://formsubmit.co/p.rosario684@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New submission!"/>
            <div class="form-floating">
                <input type="email" name="email" class="form-control" id="floatingInputGrid" required />
                <label for="floatingInputGrid">Email Address</label>
            </div>
            <div class="form-floating">
              <input type="text" name="name" class="form-control" id="floatingInputGrid" required />
              <label for="floatingInputGrid">Name</label>
            </div>
            <div class="form-floating">
              <input type="text" name="message" class="form-control" id="floatingTextarea" required />
              <label for="floatingTextarea">Message</label>
            </div>
            <input type="hidden" name="_autoresponse" value="I have recieved your message and will get back to you as soon as possible" />
              <button class="btn-md rounded-pill mt-3 ml-3 mb-3"  type="submit">Send</button>
            </form>
       
        </Container>
        </footer>
        </Zoom>
)    
};

export default Footer;

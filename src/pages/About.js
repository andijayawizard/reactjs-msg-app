import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Alert } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="justify-content-center">
          <Alert variant="success">
            <Alert.Heading>About Us</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </div>
        <Footer />
      </>
    );
  }
}

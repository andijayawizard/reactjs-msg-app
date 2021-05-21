import { Component } from "react";
import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>Contact</h1>
          <a href="/contact">Contact</a>
        </div>
        <Footer />
      </>
    );
  }
}
export default Contact;

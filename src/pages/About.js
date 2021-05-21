import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="justify-content-center">
          <h1>About</h1>
          <a href="/about">About</a>
        </div>
        <Footer />
      </>
    );
  }
}

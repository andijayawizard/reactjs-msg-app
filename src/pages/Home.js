import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="justify-content-center">
          <h1>Home</h1>
          <a href="/">Home</a>
        </div>
        <Footer />
      </>
    );
  }
}
export default Home;

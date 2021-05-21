import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
          <br class='clearfix' />
          created & developed by andijaya
        </div>
      </>
    );
  }
}
export default Footer;

import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-light text-center text-lg-start">
      
      <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
        © 2020 Copyright:
        <a className="text-dark" href="https://www.be.cognozant.com">Cognizant.com</a>
      </div>
      
    </footer>
    );
  }
}
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/products" component={Products}></Route>
    </Router>
  );
}
export default App;

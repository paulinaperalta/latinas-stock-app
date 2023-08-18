import "./css/app.css";
import "./css/styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Revisar from "./components/Revisar";
import Comprar from "./components/Comprar";
import Navbar from "./components/Navbar";
import Depositar from "./components/Depositar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Revisar" component={Revisar} />
        <Route path="/Comprar" component={Comprar} />
        <Route path="/Depositar" component={Depositar} />
      </Switch>
    </Router>
  );
}

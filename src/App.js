import React from "react";
import "./App.css";
import Navigation from "./Component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Component/Products";
import Customers from "./Component/Customers";
import Invoice from "./Component/Invoice";
import CreateInvoice from "./Component/CreateInvoice";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Switch>
          <Container>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/invoice">
              <Invoice />
            </Route>
            <Route path="/create">
              <CreateInvoice />
            </Route>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

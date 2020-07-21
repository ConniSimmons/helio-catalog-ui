import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AddCatalog from "./pages/addCatalog";
import EditCatalog from "./pages/editCatalog";
import CatalogList from "./pages/listCatalog";
import Page from "./components/Page";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Page>
            <div>
              <div className="container mt-3">
                <Switch>
                  <Route
                    exact
                    path={["/", "/catalog"]}
                    component={CatalogList}
                  />
                  <Route exact path="/add" component={AddCatalog} />
                  <Route path="/catalog/:id" component={EditCatalog} />
                </Switch>
              </div>
            </div>
          </Page>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import AddCatalog from "./pages/addCatalog";
import DispCatalog from "./pages/dispCatalog";
import CatalogList from "./pages/listCatalog";
import Page from "./components/Page";

class App extends Component {
  constructor()
    {
      super();
      this.state = {
        catalog: [],
        catalogList: [],
        editForm: '',
      }
    }
    getCatalog = () =>
    {
      fetch('https://helio-catalog-api.herokuapp.com/api/catalog')
      //fetch('http://localhost:8080/api/catalog')
      .then((response) =>
      {
        return response.json()
      })
      .then((data) =>
      {
        console.log('data from api: ', data);
        this.setState({
          catalog: data,
          catalogList: data.map((item) =>
          {
            return <li 
                      key={item._id}
                      id={item._id}
                      onClick={this.updateTerms}
                      >{item.title || "Unknown"}</li>
          }),
          editForm: ''
        })
      })
      .catch();
    }
    updateCatalog = (event) =>
    {
      // this is the id of the item i want to update
      //console.log('all termss: ', this.state.termss);
      const id = event.target.getAttribute('id');
      const stupidFind = (id) =>
      {
        for (let i = 0; i < this.state.catalog.length; i++)
        {
          let catalog = this.state.catalog[i];
          if (catalog._id === id)
          {
            return catalog;
          }
        }
        return null;
      }
      let thisCatalog = stupidFind(id);
      //thisTerms = thisTerms[0];
      //console.log('thisTerms: ', thisTerms);
      //console.log('id: ', id);
      this.setState({
        editForm: ''
      }, function()
      {
        this.setState({
          editForm: <DispCatalog {...thisCatalog} getCatalog={this.getCatalog} />
        })
      });
  
      return;
    }
    componentDidMount()
    {
      this.getCatalog();
    }
  
  render()
  {
    return (
      <div>

      <Router>
        <Page>
        <div>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/catalog"]} component={CatalogList} />
              <Route exact path="/add" component={AddCatalog} />
              <Route path="/catalog/:id" component={DispCatalog} />
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
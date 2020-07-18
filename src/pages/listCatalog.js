import React, { Component } from "react";
import CatalogDataService from "../DataService";
import { Link } from "react-router-dom";
import DispCatalog from "./dispCatalog";


export default class CatalogList extends Component {
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
      //fetch('https://helio-catalog-api.herokuapp.com/api/catalog')
      fetch('http://localhost:8080/api/catalog')
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
                      onClick={this.updateCatalog}
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
      //console.log('all catalog: ', this.state.catalog);
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
      //thisCatalog = thisCatalog[0];
      //console.log('thisCatalog: ', thisCatalog);
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
        <div className="App">
          <ul>
          {this.state.catalogList}
          </ul>
          {this.state.editForm}
        </div>
      )
    }
  }
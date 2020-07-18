import React, { Component } from "react";
import CatalogDataService from "../DataService";
import axios from 'axios';



export default class DispCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: [],
      title: props.title,
      description: props.description,
      link: props.link,
      displayname: props.displayname,
      archived: props.archived,
      isLoading: true,
      errors: null
  };
  console.log('props: ', props);
  }

  submitHandler = (event) =>
      {
        let id = this.props._id;
        event.preventDefault();
        const fetchOptions = {
          headers: {'Content-Type': 'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.state),
        }
        fetch(`http://localhost:8080/api/catalog/${id}`, fetchOptions)
        .then((response) =>
        {
          return response.json()
        })
        .then((data) =>
        {
          this.props.getCatalog();
        })
        .catch();
      }
      changeHandler = (event) =>
      {
        const key = event.target.getAttribute('name');
        const update = {};
        update[key] = event.target.value;
        this.setState(update);
      }
      
      render()
     {
        return ( 
          <div>
            <div className="edit-form">
              <h3>Edit Entry</h3>     
                  {this.state.editForm}
          
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label >Title:</label>
                  <input
                    className="form-control"
                    default value={this.state.title}
                    onChange={this.changeHandler}
                    name="title"
                  />
                </div>
                <div className="form-group">
                  <label>Definition:</label>
                    <input
                      className="form-control"
                      default value={this.state.description}
                      onChange={this.changeHandler}
                      name="description"
                    />
                </div>
                <div className="form-group">
                  <label>Link:</label>
                    <input
                    className="form-control"
                    default value={this.state.link}
                    onChange={this.changeHandler}
                    name="link"
                    />
                </div>
                <div className="form-group">
                  <label>Display Link As:</label>
                    <input
                    className="form-control"
                    default value={this.state.displayname}
                    onChange={this.changeHandler}
                    name="displayname"
                    />
                </div>
                <div className="form-group">
                  <label>
                    <strong>Status:</strong>
                  </label>
                    {this.state.archived ? "Archived" : "Current"}
                </div>
              
              
              <button 
                type='submit' 
                value="Update" 
              >
              Update
              </button>
              <p>{this.state.message}</p>
            
              </form>
            </div>
        
      </div>
    );
  }
}
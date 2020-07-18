import React, { Component } from "react";
import CatalogDataService from '../DataService';

export default class AddCatalog extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeDisplayname = this.onChangeDisplayname.bind(this);
    this.saveCatalog = this.saveCatalog.bind(this);
    this.newCatalog = this.newCatalog.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      link: "",
      displayname: "",
      archived: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    });
  }

  onChangeDisplayname(e) {
    this.setState({
      displayname: e.target.value
    });
  }

  saveCatalog() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      link: this.state.link,
      displayname: this.state.displayname
    };

    CatalogDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          link: response.data.link,
          displayname: response.data.displayname,
          archived: response.data.archived,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCatalog() {
    this.setState({
      id: null,
      title: "",
      description: "",
      link: "",
      displayname: "",
      archived: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCatalog}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="linl">Link</label>
              <input
                type="text"
                className="form-control"
                id="link"
                value={this.state.link}
                onChange={this.onChangeLink}
                name="link"
              />
            </div>

            <div className="form-group">
              <label htmlFor="displayname">Display Link As:</label>
              <input
                type="text"
                className="form-control"
                id="displayname"
                required
                value={this.state.displayname}
                onChange={this.onChangeDisplayname}
                name="displayname"
              />
            </div>

            <button onClick={this.saveCatalog} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
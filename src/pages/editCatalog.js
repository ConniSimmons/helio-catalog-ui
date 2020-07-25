import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class EditCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: [],
      title: props.title,
      description: props.description,
      link: props.link,
      displayname: props.displayname,
      archived: props.archived,
    };
    console.log("props: ", props);
  }

  submitHandler = (event) => {
    let id = this.props._id;
    event.preventDefault();
    const fetchOptions = {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(this.state),
    };
    fetch(`https://helio-catalog-api.herokuapp.com/catalog/${id}`, fetchOptions)
    //fetch(`http://localhost:8080/api/catalog/${id}`, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.getCatalog();
      })
      .catch();
  };
  changeHandler = (event) => {
    const key = event.target.getAttribute("name");
    event.preventDefault();
    const update = {};
    update[key] = event.target.value;
    this.setState(update);
  };

  updateArchived = (e) => {
    const currentState = this.state.archived;
    this.setState({ archived: !currentState });

    console.log(currentState);
  };

  render() {
    return (
      <div>
        <div className="edit-form">
          <h4>Edit Entry</h4>
          {this.state.editForm}

          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>Title:</label>
              <input
                className="form-control"
                default
                value={this.state.title}
                onChange={this.changeHandler}
                name="title"
              />
            </div>
            <div className="form-group">
              <label>Definition:</label>
              <input
                className="form-control"
                default
                value={this.state.description}
                onChange={this.changeHandler}
                name="description"
              />
            </div>
            <div className="form-group">
              <label>Link:</label>
              <input
                className="form-control"
                default
                value={this.state.link}
                onChange={this.changeHandler}
                name="link"
              />
            </div>
            <div className="form-group">
              <label>Display Link As:</label>
              <input
                className="form-control"
                default
                value={this.state.displayname}
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

            {this.state.archived ? (
              <button
                name="archived"
                default
                value={this.state.archived}
                className="badge badge-primary mr-2"
                onClick={() => this.updateArchived(false)}
              >
                UnArchive
              </button>
            ) : (
              <button
                name="archived"
                default
                value={this.state.archived}
                className="badge badge-primary mr-2"
                onClick={() => this.updateArchived(true)}
              >
                Archive
              </button>
            )}

            <button
              type="submit"
              className="badge badge-success"
              value="update"
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
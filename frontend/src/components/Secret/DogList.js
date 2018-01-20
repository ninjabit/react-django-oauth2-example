import React, { Component } from "react";

class DogList extends Component {
  componentDidMount() {
    this.props.requestDogs();
  }
  render() {
    return (
      <div>
        <h1>Only Authenticated users can see this page</h1>
        {this.props.dogs.dogData.map((dog, index) => {
          return (
            <li key={index}>
              Name: {dog.name} Age:===={dog.age}=====Breed: {dog.breed}
            </li>
          );
        })}
        <button
          onClick={() => this.props.requestDogs()}
          className="btn btn-success"
        >
          Load Dogs
        </button>
      </div>
    );
  }
}

export default DogList;

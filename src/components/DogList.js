import React, { Component } from "react";

class DogList extends Component {
	componentDidMount() {
		this.props.requestDogs();
	}
	render() {
		console.log(this.props.dogs);
		return (
			<div>
				{this.props.dogs.dogData.map(dog => {
					return (
						<li key={dog.name}>
							Name: {dog.name} Age:===={dog.age}=====Breed:{" "}
							{dog.breed}
						</li>
					);
				})}
				<button onClick={() => this.props.requestDogs()}>
					Load More Dogs
				</button>
			</div>
		);
	}
}

export default DogList;

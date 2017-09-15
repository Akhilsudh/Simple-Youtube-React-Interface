import React, { Component } from 'react'

class SearchBar extends Component {
	//This is the first fucntion called automatically whenever an instance is created
	constructor(props) {
		//This super function calls the parent's constructor
		super(props);
		//We must only change the state only on the constructor
		this.state = { term: '' };
	}

	//This function is rerenderred whenever the state changes
	render() {
		return( 
			<div>
				<input 
					value={this.state.term}
					onChange={(event) => this.setState({ term: event.target.value})} />
			</div>
		);
	}
}

/*
const SearchBar = () => {
	return <input />; 
};
*/
export default SearchBar;
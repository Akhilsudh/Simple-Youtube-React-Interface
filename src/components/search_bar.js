import React, { Component } from 'react'

class SearchBar extends Component {
	//This is the first fucntion called automatically whenever an instance is created
	constructor(props) {
		//This super function calls the parent's constructor
		super(props);

		this.state = { term: '' };
	}

	//This function is rerenderred whenever the state changes
	render() {
		return <input onChange={(event) => console.log(event.target.value)} />;
	}
}

/*
const SearchBar = () => {
	return <input />; 
};
*/
export default SearchBar;
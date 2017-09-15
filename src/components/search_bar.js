import React, { Component } from 'react'

class SearchBar extends Component {
	//This is the first fucntion called automatically whenever an instance is created
	constructor(props) {
		//This super function calls the parent's constructor
		super(props);
		//We must only change the state only on the constructor
		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChanged(term);
	}

	//This function is rerenderred whenever the state changes
	render() {
		return(
			<div className="search-bar">
				<img id="yourContainer" src="https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube_icon_light.svg" />
				<input
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)} />
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

import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMsjET-0KMRF9f3DGl92muiHytGbZ3TC8';

//Create a new component and this 
//component must produce some html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Put that component HTML and put it into the
// the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

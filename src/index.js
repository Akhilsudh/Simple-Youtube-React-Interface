import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

//All the data handling shit must be done in the highest most component
const API_KEY = 'AIzaSyBMsjET-0KMRF9f3DGl92muiHytGbZ3TC8';

//Youtube API called here
YTSearch({ key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

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

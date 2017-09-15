import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBMsjET-0KMRF9f3DGl92muiHytGbZ3TC8';

//Create a new component and this
//component must produce some html
class App extends Component {

	constructor(props) {
			super(props);

			this.state = {
				videos: [],
				selectedVideo: null
			};

			//Youtube API called here
			this.videoSearch('dota');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, (data) => {
			this.setState({
				videos: data,
				selectedVideo: data[0]
			});
		});
	}
	//make sure there are no NULL values in the props
	render() {
		return (
			<div>
				<SearchBar onSearchTermChanged={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

//Put that component HTML and put it into the
// the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

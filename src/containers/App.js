import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({ robots: users }));

	}

	onsearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render(){
		const { robots, searchField } = this.state;

		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return !robots.length ? 
			<h1>Loading</h1> :
			(
				<div className="tc">
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={this.onsearchChange}/>
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>
			);		
	}

		
}

export default App;
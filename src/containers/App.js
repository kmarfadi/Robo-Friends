import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  // Fetch user data from API when the component mounts
  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // Handle search input changes
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;

    // Filter robots based on search input
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">ROBO Friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: '',
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  // Fetch user data from API when the component mounts
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.cypress.io/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

    useEffect(()=>{
      fetch('https://jsonplaceholder.cypress.io/users')
      .then((response) => response.json())
      .then((users) => { setRobots( users ) });
    }, []);
    
    const onSearchChange = (event) => {
      setSearchfield(event.target.value);
    }
    
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">ROBO Friends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }


export default App;

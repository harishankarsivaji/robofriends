import React, { useCallback, useState, useEffect} from 'react';
// import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

const App = () => {

    const [robots, setRobots] =useState([]);
    const [searchField, setSearchField] =useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setRobots(res));
    }
    fetchData();
  });

    const handleChange = (event) => { 
        setSearchField (event.target.value);       
    };

    const filteredRobot = useCallback ( robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
    }));

    return (
        <div className='tc'>
            <h1 className='fw3 f1'> --- Hello Robots --- </h1>
            <SearchBox searchChange={handleChange}/>
            <Scroll>
                <CardList robots={filteredRobot} />
            </Scroll>
        </div>
    )
}

export default App;
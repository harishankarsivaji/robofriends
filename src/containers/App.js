import React, { useCallback, useState, useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField } from '../action';

const App = () => {

    const [robots, setRobots] =useState([]);
    const [searchField, setSearchField] =useState('');
        
    // const dispatch = useDispatch();
    // const searchField = useSelector( (state) => state.searchField)

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

export default connect()(App);
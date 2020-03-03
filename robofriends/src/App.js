import React, { useCallback, useState} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () => {

    const [searchField, setSearchField] =useState('');

    const handleChange = useCallback ((event) => { 
        setSearchField (event.target.value);       
    });

    const filteredRobot = useCallback ( robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
    }));
    // console.log(filteredRobot);

    return (
        <div className='tc'>
            <h1> --- Hello Robots --- </h1>
            <SearchBox searchChange={handleChange}/>
            <CardList robots={filteredRobot} />
        </div>
    )
}

export default App;
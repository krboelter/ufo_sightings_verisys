import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Menu from './components/Menu'
import Home from './components/Home'

function App() {
    return (
        <div className="App">
            <Menu />

            <Route exact path='/' component={Home} />
        </div>
    );
}

export default App;

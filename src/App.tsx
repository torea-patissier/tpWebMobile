import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ListItem} from "./components/ListItem";
import Home from "./Views/Home";
import About from "./Views/About";
import List from "./Views/List";
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <body>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/list"  element={<List/>}/>
                    <Route path="/listitem"  element={<ListItem/>}/>
                </Routes>
            </body>
        </div>
    );
}

export default App;

import React from 'react';
import Crossword from './components/Crossword/Crossword';
import data from "./Data/sample.json";
import './App.css';

const App = () => <Crossword data={data} />

export default App;

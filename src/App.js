import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import Details from './detail/student.js';
import Remove from './detail/edit.js';

class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Details/>}/>
                    <Route exact path="/:edit" element={<Remove/>}/>
                </Routes>
            </Router>
            </>
        )
    }
}
export default App;


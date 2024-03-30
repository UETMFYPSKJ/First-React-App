import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

class ReactRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        
            </BrowserRouter>
        )
    }
}
export default ReactRouter;

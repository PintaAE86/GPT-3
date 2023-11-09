import React from "react";
import "./App.css";
import {Article, Brand, CTA, Feature, Navbar} from './components';
import Counter from './Counter.jsx'
const App = () =>{
    return (
        <div>
            <Counter />
            <Article />
            <Brand />
            <CTA />
            <Feature />
            <Navbar />
        </div>
    )
}
export default App;
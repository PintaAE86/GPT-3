import React from "react";
import "./App.css";
import { Blog, Feature, Footer, Header, Possiblity, GPT3 } from "./container";
import {Article, Brand, CTA, Navbar} from './components';
import Counter from './Counter.jsx'
const App = () =>{
    return (
        <div className="App">
          <div className="gradiebt_bg">
            <Navbar />
            <Header />
          </div>
          <Brand />
          <GPT3 />
          <Feature />
          <Possiblity />
          <CTA />
          <Blog />
          <Footer />
        </div>
    )
}
export default App;
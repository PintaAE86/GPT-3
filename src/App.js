import React from "react";

import { Blog, Features, Footer, Header, Possiblity, GPT3 } from "./container";
import {Article, Brand, CTA, Navbar} from './components';

const App = () =>{
    return (
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Brand />
          <GPT3 />
          <Features />
          <Possiblity />
          <CTA />
          <Blog />
          <Footer />
        </div>
    )
}
export default App;
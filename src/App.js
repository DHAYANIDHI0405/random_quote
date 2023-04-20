import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Quote from './Quote';
import Contact from './Contact';
import Header from './header';
import Footer from './footer';
function App() {
    return(
        <div className="App">
            <Navbar/>
            <Header/>
            <Quote/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default App;
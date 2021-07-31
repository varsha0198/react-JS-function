import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';


function App() {
  return (
    <div>
     <h1> This is default component</h1> 
     <hr/>
     <Header />
     <hr/>
     <Footer />
     <hr/>
     <Section />
    </div>
      
  );
}

export default App;

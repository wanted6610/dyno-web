import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Workers from './components/workers/workers';
import Contacts from './components/contacts/contacts';

const App = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <Header />
          <Route path="/home" component={Content} />
          <Route path="/workers" component={Workers} />
          <Route path="/contacts" component={Contacts} />         
        <Footer />
      </div>
    </BrowserRouter>    
  );
}

export default App;

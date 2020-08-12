import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SecondHeader from './SecondHeader';
import Mobile from './Mobile';
import Computer from './Computer';
import Electronic from './Electronic';
import Book from './Book';
import Customer from './Customer';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
       <div className="app">
         <Switch>
           <Route path="/checkout">
           <Header />
             <Checkout />
           </Route>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/mobiles">
           <Header />
             <SecondHeader />
             <Mobile />
             </Route>

             <Route path="/computer">
           <Header />
             <SecondHeader />
             <Computer />
             </Route>

             <Route path="/electronic">
           <Header />
             <SecondHeader />
             <Electronic />
             </Route>

             <Route path="/book">
           <Header />
             <SecondHeader />
             <Book />
             </Route>

             <Route path="/customer">
           <Header />
             <SecondHeader />
             <Customer />
             </Route>
           
           <Route path="/">
             <Header />
             <SecondHeader />
             <Home />
           </Route>
         </Switch>
       </div>
    </Router>
  );
}

export default App;

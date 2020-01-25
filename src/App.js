import React, { useState } from 'react';
import Header from './components/Header';
import Headlines from './components/Headlines';
import UsaNews from './components/Usa';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Content from './components/Content';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
 let news;
 const [page, setpage] = useState('');

 if (page === 'usa') {
  news = <UsaNews />;
 } else if (page === 'en') {
  news = <Entertainment />;
 } else if (page === 'health') {
  news = <Health />;
 } else {
  news = <Headlines />;
 }
 const usaNews = () => {
  setpage('usa');
 };
 const ENNews = () => {
  setpage('en');
 };
 const healthNews = () => {
  setpage('health');
 };
 return (
  <div>
   <Header />
   <Search usaNews={usaNews} ENNews={ENNews} healthNews={healthNews} />

   <Router>
    <Route exact path="/" render={() => news} />

    <Route exact path="/headlines/:contentID" component={Content} />
   </Router>
  </div>
 );
}

export default App;

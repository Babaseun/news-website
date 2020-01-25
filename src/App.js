import React, { useState } from 'react';
import Header from './components/Header';
import Headlines from './components/Headlines';
import UsaNews from './components/Usa';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Content from './components/content/Content';
import UsaContent from './components/content/Usa';
import EntertainmentContent from './components/content/Entertainment';
import HealthContent from './components/content/Health';

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
    <Route exact path="/us/:contentID" component={UsaContent} />
    <Route exact path="/en/:contentID" component={EntertainmentContent} />
    <Route exact path="/health/:contentID" component={HealthContent} />
   </Router>
  </div>
 );
}

export default App;

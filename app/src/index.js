import React from 'react';
import ReactDOM from 'react-dom';


import Header from './component/header.js'
import Bmw from './component/bmw.js'
import Announcement from './component/announcement.js'
import Footer from './component/footer.js'

ReactDOM.render(
    <div className="container">
      <div className="wrapper">
        <Header />
        <Bmw />
        <Announcement />
        <Footer />
      </div>
    </div>,
    

  document.getElementById('root'),

);


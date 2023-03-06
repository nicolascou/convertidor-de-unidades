import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  </>
);

// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import ThreeBackground from './components/ThreeBackround.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <ThreeBackground />
      <div className="app-container">
        <Header />
        <Nav />
      </div>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

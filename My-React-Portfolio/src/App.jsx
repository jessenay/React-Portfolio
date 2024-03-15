// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import ThreeBackground from './components/ThreeBackround.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ThreeBackground />
      <Nav />
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;

// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import ThreeBackground from './components/ThreeBackround.jsx'; // Ensure this import path is correct

function App() {
  return (
    <>
      <ThreeBackground />
      <Header />
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;

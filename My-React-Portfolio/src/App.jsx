// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation.jsx';
import Header from './components/Header.jsx';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Header />
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
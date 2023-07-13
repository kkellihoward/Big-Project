import './App.css';
import React from 'react';
import './components/style.css'
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

//pages
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventPage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element ={<LandingPage />} />
          <Route path='Events' element ={<EventsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

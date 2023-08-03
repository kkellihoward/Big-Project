import './App.css';
import React from 'react';
import './components/style.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventPage';
import VerificationPage from './pages/VerificationPage';
import SpecificEventPage from './pages/SpecificEventPage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element ={<LandingPage />} />
          <Route path='Events' element ={<EventsPage />} />
          <Route path= 'EventsInfo' element = {<SpecificEventPage />} />
           <Route path= 'user/verify-email/:token' element = {<VerificationPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}



export default App;

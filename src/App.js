import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { History } from '../src/Pages/history';
import { Members } from './Pages/members';
import Navigation from './NavBar/navigation'; // Update the import path
import EmailForm from './Pages/rushform';
import { Photos } from './Pages/photos';
//testing branch access

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<History />} />
          <Route path="/members" element={<Members />} />
          <Route path="/rush" element={<EmailForm />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

export function AdminRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<History />} />
        <Route path="/members" element={<Members />} />
        <Route path="/rush" element={<EmailForm />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

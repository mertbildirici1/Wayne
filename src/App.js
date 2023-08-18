import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { History } from '../src/Pages/history';
import { Members } from './Pages/members';

function App() {
  return (
    <div className="App">
      <History/>
        

    </div>
  );
}

export default App;

export function AdminRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<History/>} />
        <Route path="/members" element={<Members/>} />
      </Routes>
    </Router>
  );
}

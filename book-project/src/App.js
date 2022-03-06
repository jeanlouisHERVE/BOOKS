import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './containers/AddBooks';
import SearchBook from './containers/SearchBook';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><AddBooks/><Footer /></>}/>
          <Route path="/search" element={<><Navbar /><SearchBook/><Footer /></>}/>
        </Routes>
    </Router>
  );
}

export default App;

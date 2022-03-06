import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './containers/AddBooks';


function App() {
  return (
    <div className="App">   
        <Navbar />
        <AddBooks />
        <Footer />
    </div>
  );
}

export default App;

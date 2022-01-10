import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './App.css';


const App = () => {

  
  return (
    <div  className='app'>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Todo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

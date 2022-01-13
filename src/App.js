import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Focus from './components/Focus';
import Counter from './components/Counter';

import './App.css';


const App = () => {

  
  return (
    <div  className='app'>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
          <Link to="/focus">Focus</Link>
          <Link to="/counter">counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Todo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/focus" element={<Focus/>} />
          <Route path="/counter" element={<Counter initialCount={0} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

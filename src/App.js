import './styles/App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <>
    <nav className="navigation">
      <h1>Math Magicians</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CocktailGrid from './components/CocktailGrid';
import CocktailDetail from './components/CocktailDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CocktailGrid />} />
        <Route path="/cocktails" element={<CocktailGrid />} />
        <Route path="/cocktails/:id/:slug" element={<CocktailDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

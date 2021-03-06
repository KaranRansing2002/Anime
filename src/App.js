import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Dfbvjdf from './components/pages/Dfbvjdf';
import Navbar from './components/Navbar';
import Explore from './components/pages/Explore';
import Favourites from './components/pages/Favourites';
import Friends from './components/pages/Friends';
import Recommendations from './components/pages/Recommendations';
import HomePage from './components/VideoCarousel';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
        <Route path="/friends" element={<Friends/>}></Route>
        <Route path="/recommendations" element={<Recommendations/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

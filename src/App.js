import './index.css';
import Carasal from './components/Carasal'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuDropDown from './components/MenuDropDown';
import MenuItem from './components/MenuDropDown';
import Filter from './components/Filter';
import Forest from './assets/Forest_Background.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Row, Container, Navbar, Col } from 'react-bootstrap';
import HomePage from './pages/HomePage.js';
import RecipePage from './pages/RecipePage';
import ActualRecipePage from './pages/ActualRecipePage';
import Loading from './pages/Loading.js';

function App() {
  return (

      <Router>
        <Routes>
          <Route exact path = '/' element = {<HomePage/>}/>
        </Routes>
        <Routes>
          <Route path = '/filler' element = {<RecipePage/>}/>
        </Routes>
        <Routes>
          <Route path = '/recipe' element = {<ActualRecipePage/>}/>
        </Routes>
        <Routes>
          <Route path = '/loading' element = {<Loading/>}/>
        </Routes>
      </Router>

  );
}

export default App;

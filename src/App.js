import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuDropDown from './components/MenuDropDown';
import MenuItem from './components/MenuDropDown';
import Filter from './components/Filter';
import Forest from './assets/Forest_Background.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Navbar, Col } from 'react-bootstrap';
function App() {
  return (
    <Container fluid className = 'background'>
      <Row>
      <Header/>
      </Row>
      <Row>
        <Col>
        <div className='fixed'>
          
        {/* where the bottun goes*/}
        <Filter/>
        </div>
        </Col>
        <Col>
        {/*other half of the page*/}
        MMMMMMMMMMMMMMMMMMMMMMMMMMMM
        </Col>
      </Row>
      {/*
      <MenuDropDown>
        <MenuItem icon = ":)"/> !
        <MenuItem icon = ":)"/> !
        <MenuItem icon = ":)"/> !
      </MenuDropDown>
       lg = {4} md = {6} sm = {10} xs = {12}
      */}
    </Container>
  );
}

export default App;

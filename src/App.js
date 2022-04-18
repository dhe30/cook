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
        <Col lg = {4} md = {6} sm = {10} xs = {12}>
          
        {/* where the bottun goes*/}
        <Filter/>
        </Col>
        <Col lg = {8} md = {6} sm = {2} xs = {0}>
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
      */}
    </Container>
  );
}

export default App;

import './index.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MenuDropDown from './components/MenuDropDown'
import MenuItem from './components/MenuDropDown'
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Navbar } from 'react-bootstrap';
function App() {
  return (
    <Container fluid className = 'background'>
      <Row>
      <Header/>
      </Row>
      <Sidebar/>
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

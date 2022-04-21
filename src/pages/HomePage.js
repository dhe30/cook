import '../index.css';
import Carasal from '../components/Carasal'
import Header from '../components/Header';
import Filter from '../components/Filter';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
function HomePage() {
  return (
    <Container fluid className = 'background'>
      <Row>
      <Header/>
      </Row>
      <Row>
        <Col>
        <div>
          
        {/* where the bottun goes*/}
        <Filter/>
        </div>
        </Col>
        <Col >
        {/*other half of the page*/}
        <div className='fixedc'>
        <Carasal/>
        </div>
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

export default HomePage;


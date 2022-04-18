import { Row, Container, Navbar, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import '../index.css'
function Sidebar(props){
  return(
    <Col>
      <div className='fixed'>
    <Container className = 'sidebar'>
      <Row>
        <div className='flexar'>
        <h1>FIlter</h1>
        <Button id = 'MenuButton' onClick={props.onClick}>X</Button>
        </div>
      <InputGroup className = "mb-3">
        <Button>
          Search
        </Button>
        <FormControl
        placeholder='Search'
        />
      </InputGroup>
          
      </Row>
      <Row>
      <ul>
        <li id="list">
             Allergies
        </li>

        <li id="list2">
            Cuisine Style
        </li>

        <li id="list3">
            Dietary Restrictions
        </li>

      </ul>
      </Row>
      {/*<h1>Love</h1>
      <input type="text" id="search" placeholder='Search...'/>
      
      <Row>
      
      </Row>*/}
    
    </Container>
    </div>
    </Col>
  )
};

export default Sidebar;

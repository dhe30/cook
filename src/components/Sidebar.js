import { Row, Container, Navbar,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
function Sidebar(){
  return(
    <div className='fixed'>
    <Container className = 'sidebar'>
      <Row>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>FIlter</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          TEXTEXT
          </Form.Text>
          </Form.Group>
          
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
  )
};

export default Sidebar;

import { Col, Container } from 'react-bootstrap';
import '../index.css'
function Sidebar(){
  return(
    <Col className = 'sidebar'>
      <h1>Love</h1>
      <input type="text" id="search" placeholder='Search...'/>
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
    </Col>
  )
};

export default Sidebar;

import { Row, Container, Navbar, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';
import '../index.css'
import { useState, useContext } from 'react';
import { QueryContextProvider } from '../store/Beans-context';
import QueryContext from '../store/Beans-context';
function Sidebar(props){
  const [typed, setTyped] = useState('');
  const beansContext = useContext(QueryContext);
  function handler(event){
    setTyped(event.target.value)
  }
  const navigate = useNavigate();
  function goToRecipe(){
    beansContext.addNewQuery(typed);
    console.log(typed);
    console.log(beansContext.query);
    navigate('/filler');
  }
  return(
    <QueryContextProvider>
    <Col>
      <div className='fixed'>
    <Container className = 'sidebar'>
      <Row>
        <div className='flexar'>
        <h1>FIlter</h1>
        <Button id = 'MenuButton' onClick={props.onClick}>X</Button>
        </div>
      <InputGroup className = "mb-3">
        <Button onClick = {goToRecipe}>
          Search
        </Button>
        <FormControl
        placeholder='Search'
        onChange={handler}
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
    </QueryContextProvider>
  )
};

export default Sidebar;

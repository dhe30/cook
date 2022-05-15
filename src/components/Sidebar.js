import { Row, Container, Navbar, Col, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';
import '../index.css'
import { useState, useContext } from 'react';
import { QueryContextProvider } from '../store/Beans-context';
import QueryContext from '../store/Beans-context';
import {Accordion} from 'react-bootstrap';
function Sidebar(props){

  const [typed, setTyped] = useState('');
  const [sugges, setSugges] = useState([]);
  const beansContext = useContext(QueryContext);
  function handleChange(text){

    setTyped(text);

    console.log(typed);
    fetch(`https://api.edamam.com/auto-complete?app_id=f426f10d&app_key=2d5bf94e3aab75005018d795879e50d6&q=${text}&limit=3`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSugges(data);
            });
          
  }
  const navigate = useNavigate();
  function goToRecipe(){
    console.log(typed);

    beansContext.addNewQuery(typed);
    console.log(typed);
    console.log(beansContext.query);
    navigate('/filler');
  }
  const clickHandler = (text)=>{
    setTyped(text);

  }
  return(
    <QueryContextProvider>
    <Col>
      <div className='fixed'>
    <Container className = 'sidebar'>
      <Row style = {{backgroundColor: ''}}>
        <div className='flexar'>
        <h1>FIlter</h1>
        <Button id = 'MenuButton-2' onClick={props.onClick}>X</Button>
        </div>
      <InputGroup className = "">
        <Button onClick = {goToRecipe}>
          Search
        </Button>
        
        <FormControl

        placeholder='Search'
        onChange={e => handleChange(e.target.value)}
        value={typed}
        onBlur = {()=>{
          setTimeout(() =>{
            setSugges([]);
          }, 150)
        }}
        />
      </InputGroup>
      <div id='hope'>
      {sugges && sugges.map((sugge, i) =>{
          if (i < 3){
            return (
              <Stack id = 'autocomp' onClick={() => clickHandler(sugge)}>
               <div>
             {sugge}
             </div>
             </Stack>);
          }
        }
        )}
        </div>
      </Row>
      <Row>
      <div class = "py-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Allergies</Accordion.Header>
          <Accordion.Body>
          <form>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Crustcean</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Dairy</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Fish</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Mollusk</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Peanuts</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Soy</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Wheat</label></div>
          </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Row>
      <Row>
      <div class = "py-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Cuisine Style</Accordion.Header>
          <Accordion.Body>
          <form>
            <div class="check"><input type= "checkbox"/><label class="checkbox">American</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Asian</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">British</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Carribean</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Central Europe</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Chinese</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Eastern Europe</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">French</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Indian</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Italian</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Japanese</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Kosher</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Mediterranean</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Mexican</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Middle Eastern</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Nordic</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">South American</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">South East Asian</label></div>
          </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Row>
      <Row>
      <div class = "py-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Dietary Restrictions</Accordion.Header>
          <Accordion.Body>
          <form>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Balanced</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">High Fiber</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">High Protein</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Low Carb</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Low Fat</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Low Sodium</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Keto Friendly</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Kidney Friendly</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">No Oil Added</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Paleo</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Pescatarian</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Pork Free</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Red Meat Free</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Sugar Conscious</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Vegan</label></div>
            <div class="check"><input type= "checkbox"/><label class="checkbox">Vegetarian</label></div>
          </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
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

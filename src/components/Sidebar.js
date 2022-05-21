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
  const [listOfCheckboxes, setListOfCheckboxes] = useState([]);
  const beansContext = useContext(QueryContext);

  const checkboxes = new Array();
  
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

  function changeCheckbox(text) {
    let index = Array.indexOf(text);
    if (index == -1) {
      checkboxes.push(text);
    } else {
      checkboxes.splice(index, 1);
    }
    console.log(text);
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
    <Container className = "sidebar scrollbar scrollbar-primary  mt-5 mx-auto">
      <Container id = "notMoving">
      <Row style = {{backgroundColor: ''}}>
        <div className='flexar'>
        <h1 className='fontastica'>Filter</h1>
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
      </Container>
      <Row className = "Taylor_Swift">
      <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Allergies</Accordion.Header>
          <Accordion.Body>
          <form className = "moveLeft">
            <div class="check">
              <input type= "checkbox" />
              <label className = "moveLeft">
                Crustacean
              </label>
            </div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Dairy</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Fish</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Mollusk</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Peanuts</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Soy</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Wheat</label></div>
          </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Row>
      <Row>
      <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Cuisine Style</Accordion.Header>
          <Accordion.Body>
          <form className = "moveLeft">
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">American</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Asian</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">British</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Carribean</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Central Europe</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Chinese</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Eastern Europe</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">French</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Indian</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Italian</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Japanese</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Kosher</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Mediterranean</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Mexican</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Middle Eastern</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Nordic</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">South American</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">South East Asian</label></div>
          </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Row>
      <Row>
      <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Dietary Restrictions</Accordion.Header>
          <Accordion.Body>
          <form className = "moveLeft">
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Balanced</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">High Fiber</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">High Protein</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Low Carb</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Low Fat</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Low Sodium</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Keto Friendly</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Kidney Friendly</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">No Oil Added</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Paleo</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Pescatarian</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Pork Free</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Red Meat Free</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Sugar Conscious</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Vegan</label></div>
            <div class="check"><input type= "checkbox"/><label className = "moveLeft">Vegetarian</label></div>
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

import { Row, Container, Navbar, Col, Stack, AccordionCollapse} from 'react-bootstrap';
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
import {Form} from 'react-bootstrap';
import CheckboxList from './CheckboxList.js';

let checkboxes = [];

function Sidebar(props){

  const [typed, setTyped] = useState('');
  const [sugges, setSugges] = useState([]);
  const [listOfCheckboxes, setListOfCheckboxes] = useState([]);

  const beansContext = useContext(QueryContext);

  let cuisineList = [];
  let dietList = [];
  let healthList = [];

  /* Cuisine, diet, health
  */

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

  function changeCheckbox(checkboxList, text) {
    let index = checkboxList.indexOf(text);
    if (index == -1) {
      checkboxList.push(text);
      console.log("Added " + text);
    } else {
      checkboxList.splice(index, 1);
      console.log("Removed: " + text);
    }
    console.log(checkboxList);
  }

  const navigate = useNavigate();
  function goToRecipe(){
    console.log(typed);

    beansContext.addNewQuery(typed);
    console.log(typed);
    console.log(beansContext.query);

    navigate('/filler');

    console.log(listOfCheckboxes);
  }
  
  const clickHandler = (text)=>{
    setTyped(text);

  }

  const sendCheckboxes = () => {
    checkboxes.push(cuisineList);
    checkboxes.push(dietList);
    checkboxes.push(healthList);
    setListOfCheckboxes(checkboxes);
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
        onClick = {sendCheckboxes}
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
          
          {// this is the weird looking block comment 
          }
          {/* <Form>
            {['Crustacean', 'Dairy', 'Fish', 'Mollusk', 'Peanuts', 'Soy', 'Wheat'].map((name) => (
              <div key={`default-${name}`} className = "checkbox-size">
                <Form.Check className = 'check' 
                  onChange = {() => changeCheckbox(`${name}`)}
                  type = 'checkbox'
                  id={`default-${name}`}
                  label={name}
                />
              </div>
            ))}
          </Form> */}

          {// this is Samuel's block
          }
          <form className = "moveLeft">
            <div className="check">
              <input type= "checkbox" onChange = {() => changeCheckbox(healthList, "crustacean-free")}/>
              <label className = "moveLeft">
                Crustacean
              </label>
            </div>
            <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "dairy-free")}/><label className = "moveLeft">Dairy</label></div>
            <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "fish-free")}/><label className = "moveLeft">Fish</label></div>
            <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "mollusk-free")}/><label className = "moveLeft">Mollusk</label></div>
            <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "peanut-free")}/><label className = "moveLeft">Peanuts</label></div>
            <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "soy-free")}/><label className = "moveLeft">Soy</label></div>
            <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "wheat-free")}/><label className = "moveLeft">Wheat</label></div>
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
          <Form>
            {['American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian'].map((name) => (
              <div className = "fixing">
                <input type= "checkbox" onChange = {() => changeCheckbox(cuisineList, `${name}`)}/>
                <label className = "moveLeft">
                  {name}
                </label>
              </div>
            ))}
          </Form>
          {/* <form className = "moveLeft">
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">American</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Asian</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">British</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Caribbean</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Central Europe</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Chinese</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Eastern Europe</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">French</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Indian</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Italian</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Japanese</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Kosher</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Mediterranean</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Mexican</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Middle Eastern</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">Nordic</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">South American</label></div>
            <div className="check"><input type= "checkbox"/><label className = "moveLeft">South East Asian</label></div>
          </form> */}
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
          {/* <Form>
            {['Balanced', 'High Fiber', 'High Protein', 'Low Carb', 'Low Fat', 'Low Sodium', 'Keto Friendly', 'No Oil Added', 'Paleo', 'Pescatarian', 'Pork Free', 'Red Meat Free', 'Sugar Conscious', 'Vegan', 'Vegetarian'].map((name) => (
              <div className = "fixing">
                <input type= "checkbox" onChange = {() => changeCheckbox(`${name}`)}/>
                <label className = "moveLeft">
                  {name}
                </label>
              </div>
            ))}
          </Form> */}

            <form className = "moveLeft">
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(dietList, "balanced")}/><label className = "moveLeft">Balanced</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(dietList, "high-fiber")}/><label className = "moveLeft">High Fiber</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(dietList, "high-protein")}/><label className = "moveLeft">High Protein</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(dietList, "low-carb")}/><label className = "moveLeft">Low Carb</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(dietList, "low-fat")}/><label className = "moveLeft">Low Fat</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(dietList, "low-sodium")}/><label className = "moveLeft">Low Sodium</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "keto-friendly")}/><label className = "moveLeft">Keto Friendly</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "kidney-friendly")}/><label className = "moveLeft">Kidney Friendly</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "no-oil-added")}/><label className = "moveLeft">No Oil Added</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "paleo")}/><label className = "moveLeft">Paleo</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "pescatarian")}/><label className = "moveLeft">Pescatarian</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "pork-free")}/><label className = "moveLeft">Pork Free</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "red-meat-free")}/><label className = "moveLeft">Red Meat Free</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "sugar-conscious")}/><label className = "moveLeft">Sugar Conscious</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "vegan")}/><label className = "moveLeft">Vegan</label></div>
              <div className="check"><input type= "checkbox" onChange = {() => changeCheckbox(healthList, "vegetarian")}/><label className = "moveLeft">Vegetarian</label></div>
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
export {checkboxes};
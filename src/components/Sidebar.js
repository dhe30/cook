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
        <Button id = 'MenuButton' onClick={props.onClick}>X</Button>
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
          }, 100)
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

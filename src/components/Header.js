import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';import 'bootstrap/dist/css/bootstrap.css';
import { QueryContextProvider } from '../store/Beans-context';
import QueryContext from '../store/Beans-context';
import {useState, useContext} from 'react';
import { Row, Container, Navbar, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header(){
const [typed, setTyped] = useState('');
const beansContext = useContext(QueryContext);
const [sugges, setSugges] = useState([]);
const clickHandler = (text)=>{
  setTyped(text);

}
function handlChange(text){
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
    beansContext.addNewQuery(typed);
    navigate('/filler');
  }


    return(
      <Container>
        <Row>
        <Navbar className = 'header'>
          <Link to='/'>
          <Navbar.Text>
            <Navbar.Brand id = "anyFood">
          <span className='any'>any</span>Food
            </Navbar.Brand>
          </Navbar.Text>
          </Link>
          <Col id = 'wombat'>
            <div id="gorilla">
          <InputGroup className = ''>
            
        <Button onClick = {goToRecipe}>
          Search
        </Button>
       

        
        <FormControl
                placeholder='Search'
        // onClick = {sendCheckboxes}
        onChange={e => handlChange(e.target.value)}
        value={typed}
        onBlur = {()=>{
          setTimeout(() =>{
            setSugges([]);
          }, 150)
        }}
        />
      </InputGroup>
      </div>
          </Col>
          <div id='hopesAndDreams'>
      {sugges && sugges.map((sugge, i) =>{
          if (i < 3){
            return (
              <Stack id = 'autocompsAndDreams' onClick={() => clickHandler(sugge)}>
               <div>
             {sugge}
             </div>
             </Stack>);
          }
        }
        )}
        </div>
        </Navbar>
        </Row>
      </Container>
    )
};

export default Header;

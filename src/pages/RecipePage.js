import '../index.css';
import Header from '../components/Header';
import Beans from '../components/Beans';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import {nextLink, currentLink, setCurrentLink} from '../components/Beans';
import Button from "react-bootstrap/Button";

function RecipePage(){
    function nextPage() {
        console.log(currentLink);
        setCurrentLink();
        console.log(currentLink);
    }
    return(
        <Container fluid>
            <Row>
                <Header/>
            </Row>
            <Row>
                <Beans/> 
            </Row>
            <Button onClick = {() => {nextPage()}}>
                Next Page
            </Button>
        </Container>
    )   
}
export default RecipePage;
import '../index.css';
import Header from '../components/Header';
import Beans from '../components/Beans';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import NextPage from '../components/NextPage.js';

function RecipePage(){
    return(
        <Container fluid>
            <Row>
                <Header id = "noGradient"/>
            </Row>
            <Row>
                <Beans/>
            </Row>
            <Row>
                <NextPage/>
            </Row>
        </Container>
    )   
}
export default RecipePage;
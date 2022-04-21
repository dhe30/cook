import '../index.css';
import Header from '../components/Header';
import Beans from '../components/Beans';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
function RecipePage(){
    return(
        <Container fluid>
            <Row>
                <Header/>
            </Row>
            <Row>
                <Beans/>
            </Row>
        </Container>
    )   
}
export default RecipePage;
import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import Instructions from '../components/Instructions';

function ActualRecipePage() {
    return (
        <Container fluid>
            <Row>
                <Header/>
            </Row>
            <Row>
                <Instructions/>
            </Row>
        </Container>
    )
}

export default ActualRecipePage;
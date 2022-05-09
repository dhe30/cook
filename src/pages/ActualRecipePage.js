import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';

function ActualRecipePage() {
    return (
        <Container fluid>
            <Row>
                <Header/>
            </Row>
        </Container>
    )
}

export default ActualRecipePage;
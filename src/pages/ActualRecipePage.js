import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function ActualRecipePage() {
    const location = useLocation();
    const key = location.state.substr(location.state.lastIndexOf("_"));
    console.log(key);
    return (
        <Container fluid>
            <Row>
                <Header/>
            </Row>
        </Container>
    )
}

export default ActualRecipePage;
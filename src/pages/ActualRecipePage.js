import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function ActualRecipePage() {
    const [data, setData] = useState({recipe: null, label: "", ingredientsList: [], image: ""});
    const location = useLocation();
    const key = location.state.substr(location.state.lastIndexOf("_"));
    useEffect(() => {
        axios.get(`http://localhost:5000/recipes/${key}`)
                 .then(res => setData({recipe: res.data.recipe, label: res.data.recipe.label, ingredientsList: res.data.recipe.ingredientLines,
                                       image: res.data.recipe.image}));
    },[setData]);
    if (data === null || data === undefined){
        return(
            <Container fluid>
            <Row>
                <Header/>
                LOADING...
            </Row>
        </Container>
        )
    }
    return (
        console.log(data.label),
        <Container fluid>
            <Row>
                <Header/>
                
            </Row>
            
            <Row>
                <Col>
                    <h1>
                        {data.label}
                    </h1>

                    <ul className = "margins">
                        Ingredients:
                        {data.ingredientsList.map((ingredient) => {
                            return (
                                <li>
                                    {ingredient}
                                </li>
                            ) 
                        })}
                    </ul>
                </Col>

                <Col>
                    <img src = {data.image} className = "rightJustified">
                    </img> 
                </Col>
            </Row>
        </Container>
    )
}

export default ActualRecipePage;
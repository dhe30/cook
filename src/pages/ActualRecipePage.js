import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pages.module.css';
function ActualRecipePage() {
    const [data, setData] = useState({recipe: null, label: "", ingredientsList: [], image: ""});
    const location = useLocation();
    const key = location.state.substr(location.state.lastIndexOf("_"));
    var metric = true;
    useEffect(() => {
        axios.get(`http://localhost:5000/recipes/${key}`)
                 .then(res => setData({recipe: res.data.recipe, label: res.data.recipe.label, ingredientsList: res.data.recipe.ingredients,
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
        <Container fluid className={styles.lord}>
           
            <Row>
                <Header/>
                
            </Row>
            <div className={styles.harvard}>
            <Container className={styles.stanford}>
            <Row>
                <Col className = {styles.ingr}>
                    <h1>
                        {data.label}
                    </h1>

                    <ul className = {styles.margins}>
                        Ingredients:
                        {data.ingredientsList.map((ingredient) => {
                            let amount = ingredient.quantity;
                            amount = Math.round((amount + Number.EPSILON) * 100) / 100;
                            let measure = ingredient.measure;
                            let food = ingredient.food;
                            if(measure === "<unit>"){
                                measure ="";
                            }
                            if(metric == true){
                                if(measure === "tablespoon"){
                                    measure = "mL";
                                    amount = amount * 15;
                                }
                                if(measure === "teaspoon"){
                                    measure = "mL";
                                    amount = amount * 5;
                                }
                                if(measure === "cup"){
                                    measure = "mL";
                                    amount = amount*250;
                                }
                                if(measure === "quart"){
                                    measure = "mL";
                                    amount = amount*950;
                                }
                                if(measure === "gallon"){
                                    measure = "liter";
                                    amount = amount*3.8;
                                }
                                if(measure === "ounce"){
                                    measure = "gram";
                                    amount = amount * 28;
                                }
                                if(measure === "pound"){
                                    measure = "gram";
                                    amount = amount * 450;
                                }
                            }
                            return (
                                <li className={styles.list}>
                                    {amount} {measure} {food}
                                </li>
                            ) 
                        })}
                    </ul>
                </Col>

                <Col>
                    <img src = {data.image} className = {styles.imager}/>
                     
                </Col>
            </Row>
            </Container>
            </div>
        </Container>
    )
}

export default ActualRecipePage;
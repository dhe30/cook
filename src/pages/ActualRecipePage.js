import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pages.module.css';
import  Bars from '../assets/bar.gif';
function ActualRecipePage() {
    const [locatron, setLocatron] = useState({address: ""});
    const [data, setData] = useState({recipe: null, label: "", ingredientsList: [], image: ""});
    const location = useLocation();
    const key = location.state.substr(location.state.lastIndexOf("_"));
    var metric = true;
    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${key}`)
                 .then((res) => res.json())
                 .then((data) => {
                    const aids = data.self
                    setLocatron({address: data.self});
                    console.log(aids);
                    return fetch(aids);
                })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
                setData({recipe: data.recipe, label: data.recipe.label, ingredientsList: data.recipe.ingredients, image: data.recipe.image});
                
            });
    },[setLocatron]);
    if (data.image === null || data.image === undefined){
        return(
            <Container fluid className= "Loading">
             
            <Row className = "Loading2">
            <div>
                LOADING...
               
                <img  className = "LoadingBars" src={Bars}/>
                </div>
            </Row>
        </Container>
        )
    }
    return (
        console.log(data.recipe),
        <Container fluid className={styles.lord}>
           
            <Row>
                <Header/>
                
            </Row>
            <Row className = {styles.ill} ></Row>
            <Row className = {styles.ill}>
                <Col className = {styles.bougiee}></Col>
                <Col className = {styles.colombia}>
                    <h1>
                        {data.label}
                    </h1>
                    </Col>
                    <Col></Col>

                    </Row>
                    <Row className = {styles.ill}></Row>
            <div className={styles.harvard}>
            <Container className={styles.stanford}>
            <Row>
                
                <Col>
                    <img src = {data.image} className = {styles.imager}/>
                     
                </Col>
            </Row>
            <Row>
            <Col className = {styles.ingr}>
                    <ul className = {styles.cards}>
                        {data.ingredientsList.map((ingredient) => {
                            let amount = ingredient.quantity;
                            amount = Math.round((amount + Number.EPSILON) * 100) / 100;
                            let measure = ingredient.measure;
                            let food = ingredient.food;
                            if(measure === "<unit>"){
                                measure ="";
                            }
                            if(metric === true){
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
                                    <p className={styles.gag}> {amount} {measure} &nbsp;{food}</p>
                                </li>
                            ) 
                        })}
                    </ul>
                </Col>

                </Row>
            </Container>
            </div>
        </Container>
    )
}

export default ActualRecipePage;
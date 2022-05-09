import { Container, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import RecipeCards from "./cards/RecipeCards";
import "../index.css";

function Lava(props){
    return (
        <Container>
            {props.recipes.map((recs) => {
                return (
                    <Table>
                        <tbody>
                            <tr>
                                <RecipeCards image = {recs.recipe.image}
                                             label = {recs.recipe.label}
                                             cal = {recs.recipe.calories}
                                             prepTime = {recs.recipe.totalTime}
                                             cuisine = {recs.recipe.cuisineType}
                                             uri = {recs._links.self.href}>
                                </RecipeCards> 
                            </tr>
                        </tbody>
                        
                    </Table>
                    
                )
            })}
        </Container>
    )
}
export default Lava;
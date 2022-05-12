import { Container, Table } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import {useNavigate } from 'react-router-dom';
// import { Row, Col } from 'react-bootstrap';
import RecipeCards from "./cards/RecipeCards";
import "../index.css";

function Lava(props){ 
    return (
        
            <div class="cards">
            {props.recipes.map((recs) => {
                return (
                    <div class = "murder">
                    <RecipeCards image = {recs.recipe.image}
                                 label = {recs.recipe.label}
                                 cal = {recs.recipe.calories}
                                 prepTime = {recs.recipe.totalTime}
                                 cuisine = {recs.recipe.cuisineType}>
                    </RecipeCards> 
                    </div>
                )
            })}
            </div>
        
    )
}
export default Lava;
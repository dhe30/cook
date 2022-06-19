import { Container, Table } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import {useNavigate } from 'react-router-dom';
// import { Row, Col } from 'react-bootstrap';
import RecipeCards from "./cards/RecipeCards";
import "../index.css";
import axios from 'axios';

function Lava(props){ 
    return (
        
            <div class="cards">
            {props.recipes.map((recs) => {
                //console.log(recs);
                 axios.post('http://localhost:5000/recipes/add', recs)
                 .then(res => console.log(res.data));
                return (
                    <div class = "murder">
                    <RecipeCards image = {recs.recipe.image}
                                 label = {recs.recipe.label}
                                 cal = {recs.recipe.calories}
                                 prepTime = {recs.recipe.totalTime}
                                 cuisine = {recs.recipe.cuisineType}
                                 uri = {recs.recipe.uri}>
                    </RecipeCards> 
                    </div>
                )
            })}
            </div>
        
    )
}
export default Lava;
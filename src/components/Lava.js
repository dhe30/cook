import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Lava(props){
    return (
        <Container>
            {props.recipes.map((recs) => {
                return (
                    <h1>
                        <div>
                            {recs.recipe.label} 
                        </div>

                        <Button onClick={props.onClick}>
                            <img src = {recs.recipe.image}/>
                        </Button>

                        <li>
                            {Math.round(recs.recipe.calories)} calories
                        </li>
                    </h1>
                )
            })}
        </Container>
    )
}
export default Lava;
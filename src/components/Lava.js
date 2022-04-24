import { Container } from "react-bootstrap";

function Lava(props){
    
    return (
        <Container>
            {props.recipes.map((recs) => {
                return (
                <h1>{recs.recipe.label}</h1>)
            })}
        </Container>
    )
}
export default Lava;
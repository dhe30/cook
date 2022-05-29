import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import {useState, useEffect} from 'react';
import Forest from '../assets/Forest_Background.jpeg';
import Fish from '../assets/fish.jpg';
import { Row, Container, Navbar, CarouselItem } from 'react-bootstrap';
import axios from 'axios';
function Carasal(){
    const [data, setData] = useState({img1: null});
    const [darta, setDarta] = useState({img2: null});
    useEffect(() => {
        fetch(`http://localhost:5000/recipes/`)
                 .then((res) => res.json())
                 .then((data) => {
                    const aids = data[0].self
                    const hpv = data[1].self
                    console.log(aids);
                    return fetch(aids);
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(hpv);
                console.log(data);
                setData({recipe: data.recipe, label: data.recipe.label, ingredientsList: data.recipe.ingredients, image: data.recipe.image});
                return fetch 
            });
    },[setData]);
    if (data === null || data === undefined){
        return(
            <Container fluid>
            
        </Container>
        )
    }
    return(
        console.log(data.img1),
        <Container>
        <Carousel>
            <CarouselItem>
                <img  src= {Fish}/>
                <Carousel.Caption id = 'test'>
                    <h3>
                        Eat
                    </h3>
                    <p>
                        Tree
                    </p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img  className = 'rounded' src= {Forest}/>
                <Carousel.Caption>
                    <h3>
                        Eat
                    </h3>
                    <p>
                        Fish
                    </p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
        </Container>
    )
}

export default Carasal;
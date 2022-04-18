import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import {useState} from 'react';
import Forest from '../assets/Forest_Background.jpeg';
import Fish from '../assets/fish.jpg';
import { Row, Container, Navbar, CarouselItem } from 'react-bootstrap';

function Carasal(){
    return(
        <Container>
        <Carousel>
            <CarouselItem>
                <img className = 'rounded' src= {Forest}/>
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
                <img  className = 'rounded' src= {Fish}/>
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
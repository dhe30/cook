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
    useEffect(() => {
        axios.get('http://localhost:5000/recipes/')
                 .then(res => setData({img1: res.data}));
                 console.log(data);
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
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import {useState, useEffect} from 'react';
import Forest from '../assets/Forest_Background.jpeg';
import Fish from '../assets/fish.jpg';
import { Row, Container, Navbar, CarouselItem } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Carasal(){
    const [data, setData] = useState({img1: null, label : "", uri: ""});
    const [darta, setDarta] = useState({img2: null, label: "", uri: ""});
    let aids = "";
    let hpv = "";
    useEffect(() => {
        fetch(`http://localhost:5000/recipes/`)
                 .then((res) => res.json())
                 .then((data) => {
                     console.log(data);
                    aids = data.recipes[0].self;
                    hpv = data.recipes[1].self;
                    console.log(aids);
                    return fetch(aids);
                })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
                setData({img1: data.recipe.images.REGULAR.url, label: data.recipe.label, uri:data.recipe.uri});
                return fetch(hpv);
            })
            .then((res) => res.json())
                .then((data) => {
                console.log(data);
                setDarta({img2: data.recipe.images.REGULAR.url, label: data.recipe.label, uri:data.recipe.uri});
            })
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
            <Link to = '/recipe' state = {data.uri}>
                <img  className = 'rounde' src= {data.img1}/>
                </Link>
                <Carousel.Caption id = 'test'>
                    <h3>
                        {data.label}
                    </h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
            <Link to = '/recipe' state = {darta.uri}>
                <img  className = 'rounde' src= {darta.img2}/>
                </Link>
                <Carousel.Caption id = 'test'>
                    <h3>
                        {darta.label}
                    </h3>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
        </Container>
    )
}

export default Carasal;
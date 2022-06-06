import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Morbius from './Morbius.js';
import { Container, Row } from "react-bootstrap";
import  Bars from '../assets/bar.gif';
import { render } from '@testing-library/react';

function NextPage(props) {
    let newLink = props.link;
    let resultName = props.typed;
    
    
    const [nextRecipes, setNextRecipes] = useState([]);

    function fetchNext() {
            componentDidMount() {
            console.log("fetching new data")
            fetch(newLink)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setNextRecipes({repos: data.hits});
                        newLink = data._links.next.href;
                        console.log(data);
                    }).catch(err => {
                        console.log("fat error");
                    });
        };
    }   

    function goNext() {
        fetchNext();
        return (
            <div>
                <Morbius morb = {nextRecipes} query = {resultName}/>
            </div>  
        )
    }

    if (nextRecipes === undefined || nextRecipes === null){
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
        <Button onClick = {() => goNext()}>
            20 More :D
        </Button>
    )
    
}

export default NextPage;
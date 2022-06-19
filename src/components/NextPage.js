import React from 'react';
import Button from "react-bootstrap/Button";
import Morbius from './Morbius.js';
import { Container, Row } from "react-bootstrap";
import  Bars from '../assets/bar.gif';
import { QueryContextProvider } from '../store/Beans-context';

class NextPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {recipes : null, newLink: this.props.link};
        //console.log(this.props.link);
        //console.log(this.state.newLink);
    }
    
    componentDidMount() {
        //console.log("fetching new data");
        //console.log("THE ABSOLUTE NEWEST CURRENT LINK: " + this.state.newLink);
        fetch(this.state.newLink)
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data);
                    this.setState({recipes: data.hits});
                    if (data._links.next.href !== null) {
                        this.setState({newLink: data._links.next.href});
                    }
                });
        //console.log("THE ABSOLUTE NEWEST CURRENT LINK pt 2: " + this.state.newLink);
    };  

    goNext() {;
        //console.log("next");
        return (
            <QueryContextProvider>
                <div>
                    <Morbius morb = {this.state.recipes} query = {this.props.typed}/>
                </div>
            </QueryContextProvider>  
        )
    }

    render() { //needing help with this part

        // if (this.state.recipes === undefined || this.state.recipes === null){
        //     return(
        //         <Container fluid className= "Loading">
                 
        //         <Row className = "Loading2">
        //         <div>
        //             LOADING...
                   
        //             <img  className = "LoadingBars" src={Bars}/>
        //             </div>
        //         </Row>
        //     </Container>
        //     )
        // }

        return (
            <div>
                <Button onClick = {() => this.goNext()}>
                    20 More :D
                </Button>
            </div>
        )
    }
    
}

export default NextPage;
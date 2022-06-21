import React from 'react';
import Button from "react-bootstrap/Button";
import Morbius from './Morbius.js';
import { QueryContextProvider } from '../store/Beans-context';

class NextPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {recipes : null, newLink: ""};
    }
    
    componentDidMount() {
        //console.log("fetching new data");
        //console.log("This is the link: " + this.props.link);
        fetch(this.props.link)
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data);
                    this.setState({recipes: data.hits});
                    if (data._links.next.href !== null) {
                        this.setState({newLink: data._links.next.href});
                    }
                }).catch(err => {
                    this.props.link.parse('<...'); //console says the link is undefined
                    this.componentDidMount()
                });
    };  

    goNext() {;
        this.componentDidMount();
        //console.log("next");
        // console.log("This link: " + this.props.link);
        // console.log("Next link: " + this.state.newLink);
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
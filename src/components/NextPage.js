import React from 'react';
import Button from "react-bootstrap/Button";
import Morbius from './Morbius.js';
import '../index.css'

class NextPage extends React.Component {
    constructor(props){
        super(props);
        console.log("Made buttons");
        this.state = {recipes : null, nextLink: ""};
    }
    
    componentDidMount() {
        console.log("fetching new data");
        console.log("This is the next link to go to: " + this.props.link);
        fetch(this.props.link)
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data);
                    this.setState({recipes: data.hits, nextLink: data._links.next.href});
                });
    };  

    goNext() {;
        this.componentDidMount();
        console.log("Clicking the button will lead to this link: " + this.props.link);
        console.log("Link to be passed for the next page: " + this.state.nextLink);
        
        return (
            <div className ="lovely">
                <Morbius morb = {this.state.recipes} query = {this.context.query}/>
            </div>
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
                {/* <Button onClick = {() => this.goNext()}>
                    20 More :D
                </Button> */}
            </div>
        )
    }
    
}

export default NextPage;
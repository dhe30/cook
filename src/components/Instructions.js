import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import RecipeInstructionsContext from '../store/Instructions-context';
import { Row, Col } from 'react-bootstrap';

function Instructions() {
    const magma = useContext(RecipeInstructionsContext);
    
    return (console.log(magma.recipeInstructions));
}

export default Instructions;
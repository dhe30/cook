import { createContext, useState } from "react";

const RecipeInstructionsContext = createContext({
    recipeInstructions: '',
    addNewRecipeInstructions: (newRecipeInstructions) => {}
});

export function RecipeInstructionsContextProvider(props) {
    const [userRecipeInstructions, setUserRecipeInstructions]= useState('');
    function makeItWork(newRecipeInstructions){
        setUserRecipeInstructions(newRecipeInstructions);
    }
    const context = {
        recipeInstructions: userRecipeInstructions,
        addNewRecipeInstructions: makeItWork
    };
    return <RecipeInstructionsContext.Provider value = {context}>
        {props.children}
    </RecipeInstructionsContext.Provider>
}

export default RecipeInstructionsContext;
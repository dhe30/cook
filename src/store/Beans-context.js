import { createContext, useState } from "react";

const QueryContext = createContext({
    query: '',
    checkbox: [[],[],[]],
    health:[],
    addNewQuery: (newQuery) => {},
    addNewCheck: (newCheck) => {},
});

export function QueryContextProvider(props) {
    const [userQuery, setUserQuery]= useState('');
    const [check, setCheck]= useState([]);
    const [health, setHealth]= useState([]);

    function makeItWork(newQuery){
        localStorage.removeItem("query");
        localStorage.setItem("query", newQuery);
        setUserQuery(newQuery);
    }
    function makeIt(newCheck){
        if (newCheck.length > 1){
            console.log("LOOK HERE");
            console.log(newCheck);
        localStorage.removeItem("check");
        localStorage.setItem("check", JSON.stringify(newCheck));
        console.log(localStorage.getItem("check"));
        setCheck(newCheck);}
    }
    function makeHealth(newHealth){
            console.log("LOOK HERE");
            console.log(newHealth);
        localStorage.removeItem("health");
        localStorage.setItem("health", JSON.stringify(newHealth));
        console.log(localStorage.getItem("health"));
        setHealth(newHealth);
    }
    const context = {
        query: userQuery || localStorage.getItem("query"),
        checkbox: JSON.parse(localStorage.getItem("check")),
        health: JSON.parse(localStorage.getItem("health")),
        addNewQuery: makeItWork,
        addNewCheck: makeIt,
        addNewHealth: makeHealth,
    };
    return <QueryContext.Provider value = {context}>
        {props.children}
    </QueryContext.Provider>
}

export default QueryContext;
import { createContext, useState } from "react";

const QueryContext = createContext({
    query: '',
    checkbox: [[],[],[]],
    addNewQuery: (newQuery) => {},
    addNewCheck: (newCheck) => {},
});

export function QueryContextProvider(props) {
    const [userQuery, setUserQuery]= useState('');
    const [check, setCheck]= useState([]);
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
    const context = {
        query: userQuery || localStorage.getItem("query"),
        checkbox: JSON.parse(localStorage.getItem("check")),
        addNewQuery: makeItWork,
        addNewCheck: makeIt,
    };
    return <QueryContext.Provider value = {context}>
        {props.children}
    </QueryContext.Provider>
}

export default QueryContext;
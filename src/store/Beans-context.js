import { createContext, useState } from "react";

const QueryContext = createContext({
    query: '',
    addNewQuery: (newQuery) => {}
});

export function QueryContextProvider(props) {
    const [userQuery, setUserQuery]= useState('');
    function makeItWork(newQuery){
        setUserQuery(newQuery);
    }
    const context = {
        query: userQuery,
        addNewQuery: makeItWork
    };
    return <QueryContext.Provider value = {context}>
        {props.children}
    </QueryContext.Provider>
}

export default QueryContext;
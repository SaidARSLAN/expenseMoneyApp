import React, { createContext, useReducer } from "react";


const initialState : stateType  = {
    money : 127000
}

type contextProps = {
    money : stateType
    dispatch : React.Dispatch<actionType>

}

type stateType = {

    money : number

}

type actionType = {
    type : string,
    payload:number
}

const reducer = (state:stateType,action:actionType):stateType => {

    switch (action.type) {
        case "EXPENSE":
            return {money : state.money - action.payload}
        default :
            return {money:0}
    }

}


const GlobalContext = createContext<contextProps>({
    money: {
        money: 0
    },
    dispatch: function (value: actionType): void {
        throw new Error("Function not implemented.");
    }
})

type childrenType = {

    children: React.ReactNode

}

export const Provider: React.FC<childrenType> = ({ children }) => {

    const [money,dispatch] = useReducer(reducer,initialState)
    
    return (

        <GlobalContext.Provider value={{money,dispatch}}>

            {children}

        </GlobalContext.Provider>
    )
}
export default GlobalContext
import { logDOM } from "@testing-library/react";

const loggedReducer=(state=false,acttion)=>{
    switch(acttion.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state    
    }
};
export default loggedReducer;
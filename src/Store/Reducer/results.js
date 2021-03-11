import * as actionType from '../action';
 
 const initialState = {
     results:[]
 }
 export const resultReducer = (state = initialState, action) => {
    //switch Case
    switch(action.type) {    
        case actionType.STORE_RESULT:
        return {
            ...state,
            //actually push the value in results array
            results: state.results.concat({id: new Date(), value:action.result})
            //ctrl comes from combineReducer in index.js file bcz use ctrl bcz counter is excute in this component
        }
        case actionType.DELETE_RESULT:
        // const id = 2;
        // const newArray =[...state.results]
        // newArray.splice(id,1)
        const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        //access the this id is use upper id 
        return {
            ...state,
            results:updatedArray
        }
        default:
        return state;
    }
}

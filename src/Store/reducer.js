 import * as actionType from './action';
 
 const initialState = {
     counter: 0,
     results:[]
 }
 const reducer = (state = initialState, action) => {
    //switch Case
    switch(action.type) {
        case actionType.INCREMENT:
        // case 'INCREMENT':
            // we can also write this
            const newState =Object.assign({}, state)
            newState.counter = state.counter + 1
            return newState;
            // return {
            //     //always javascript object returns
            //     counter: state.counter + 1
            // }
            case actionType.DECREMENT:
                return {
                    ...state,
               counter: state.counter - 1
                 }
                 case actionType.ADD:
                    return {
                        ...state,
                   counter: state.counter +action.val
                     }
                     case actionType.SUBTRACT:
                        return {
                            ...state,
                       counter: state.counter - action.val
                         }
                         case actionType.STORE_RESULT:
                         return {
                             ...state,
                             //actually push the value in results array
                             results: state.results.concat({id: new Date(), value:state.counter})
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




    ///if statement
    //  // increment comes from mapDispatchToProps from counter.js
    //  if(action.type === 'INCREMENT') {
    //     return {       
    //         counter: state.counter + 1 
    //     } 
    // }
    //  if(action.type === 'DECREMENT') {
    //     return {
    //        counter: state.counter - 1
    //     }
    // }
    // if(action.type === 'ADD') {
    //     return {
    //        counter: state.counter + 5
    //        // you can also write val is passing in mapDispatchToProps
    //         // counter: state.counter + action.val
    //     }
    // }
    // if(action.type === 'SUBTRACT') {
    //     return {
    //        counter: state.counter - 5
    //     }
    // }
     
    //  return state;
 }
 export default reducer;
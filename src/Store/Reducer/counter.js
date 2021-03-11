import * as actionType from '../action';
 
 const initialState = {
     counter: 0,
 }
 export const counterReducer = (state = initialState, action) => {
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
                 default:
                     return state;
    }
}

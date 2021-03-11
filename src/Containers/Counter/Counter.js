import React, { Component } from 'react';
// connect comes from react-redux its actually hoc 
// connecting the store to react
import {connect} from 'react-redux'
import * as actionTypes from '../../Store/action'


import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
                default:
                    return value
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                 {/*  JUST BELLOW THE LINE onIncrementCounter COMES FROM mapDispatchToProps */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick = {() => this.props.onStoreResult(this.props.ctr)}>store Result</button>
                <ul>
                    {this.props.storedResult.map(strResult =>(
                    <li key = {strResult.id} onClick = {() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
// how the state mannage per redux 
const mapStateToProps = state => {
    return {
        // counter comes from reducer.js or comming from redux
        // ctr is props name
        ctr:state.ctrl.counter,
        //ctrl and res comes from index.js file in combineReducers
        storedResult:state.res.results
    }
};


//all thing store behind the scene
// dispatch is basically the helper function
const mapDispatchToProps = dispatch => {
    return {
        // [excute the dispatch and action,
        // onincrementcounter excuted to function]
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type:actionTypes.ADD ,val:5}),
        // you can also write using val and val passing to reducer.js file
        // onAddCounter: () => dispatch({type:"ADD",val:10}),
        onSubtractCounter: () => dispatch({type:actionTypes.SUBTRACT, val:5}),
        // for result is use pass the value in results.js bcz
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT,resultElId:id})


        //using actiontype bcz all type:is added "actionType" in action.js file
        //onDeleteResult: (id) => dispatch({type:'DELETE_RESULT',resultElId:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React from 'react';
import TodoDetails from './todo-details/TodoDetails';
import TodoContainer from './todo-container/TodoContainer';
import TodoForm from './todo-form/TodoForm';
import { Route, Switch, withRouter } from 'react-router-dom'


/**
 * provide routes to be used by App component using Switch and Route
 */
class Routing extends React.Component {
    render() {
        return (
    <Switch>
        <Route exact path="/">
            {(props) => <TodoContainer {...props}/>}
        </Route> 
        <Route path='/details'>        
            {(props) => <TodoDetails {...props}/>}
        </Route> 
        <Route path='/create'>        
            {(props) => <TodoForm {...props}/>}
        </Route> 
    </Switch>
        );
    }
}


export default withRouter(Routing);
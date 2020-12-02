import './TodoContainer.scss';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TodoItem from './todo-item/TodoItem'

/**
 * Todo container contains list of todo items
 */
class TodoContainer extends Component {
    constructor (props){
      super(props);
      this.state = {
        isLoading: false,
        todos: []
      }
    }

    /**
     * Fetch all todo items using GET and render the todo items by passing each todo to the 
     * todo item component
     */
    componentDidMount() {
        console.log("componentDidMount");
        let todoList = [];
        this.setState({
          isLoading: true
        }
        )
        fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(data => {
            todoList = data.map((todo) => {
            return todo
            })
          this.setState({
            todos: todoList,
            isLoading: false})
            })}
  
    render (){
        const todoList = this.state.todos.map((c,i) => {
            return(
            <TodoItem key={i} todo={c}>
            </TodoItem>);
    });
        
        return(
            <div>
                   {todoList}
                <br></br>
                <Link to= {{
                        pathname: "/create"
                    }}>
                    <button className = "btn green" type="button">
                        Add ToDo
                    </button>
                </Link>
            </div>
        )
    }
    
  }
  
  export default TodoContainer;
import './TodoDetails.scss';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

/**
 * navigated to when /details with an id is passed by clicking on a todo item in todo
 * container
 * DELETE (delete an existing todo using ID)
 * POST (Create new Todo)
 * PUT (Change status, Change content/due date/title using ID)
 */
class TodoDetails extends Component {
    constructor (props){
      super(props);
      console.log(props.location.aboutProps.todoDetails.title)
      this.state = {
        todo: props.location.aboutProps.todoDetails
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.getDatesFormat = this.getDatesFormat.bind(this);
    }

    /**
     * DELETE (delete an existing todo using ID)
     */
    deleteTodo(id){
        console.log("deleteTodo")    
        fetch('http://localhost:3000/todos/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

        this.props.history.push('/');
    }

    
    /**
     * PUT for changing status to completed or incomplete
     */
    completeTodo(todo){
        console.log("completeTodo")
        const id = todo.id;
        const data = {
        "title": todo.title,
        "description": todo.description,
        "createdDate": todo.createdDate,
        "lastModifiedDate": todo.lastModifiedDate,
        "dueDate": todo.dueDate,
        "status": !todo.status,
        };
        fetch('http://localhost:3000/todos/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        this.props.history.push('/');
    }

    /**
     * 
     * @param {Date obj} output a string date and time to be displayed 
     */
    getDatesFormat(date){
        console.log(date)
        date = date === null ? "": date; 
        let datestr = date.replace('Z','');
        let datenum = datestr.split('T')[0];
        let time = datestr.split('T')[1];
        return (datenum + " Time: "+ time)
    }
  
    render (){
        let statusBtnText = this.state.todo.status ? "Incomplete" : "Completed"
        let statusClass = this.state.todo.status ? "complete" : "pending"
        let createdDate = this.getDatesFormat(this.state.todo.createdDate);
        let dueDate = this.getDatesFormat(this.state.todo.dueDate);
        let lastModifiedDate = this.getDatesFormat(this.state.todo.lastModifiedDate);
        console.log("Dates are "+ createdDate+" "+dueDate+" "+lastModifiedDate)
        return(
            <div>
                <div className="card">
                <div className="container">
                    <h4><b>ToDo Details of </b>{this.state.todo.title}</h4>
                    <p><b>Due Date:</b> {dueDate}</p>
                    <p><b>Date Created:</b> {createdDate}</p>
                    <p><b>Date Last Modified:</b> {lastModifiedDate}</p>
                    <p><b>Description:</b> {this.state.todo.description}</p>
                    <p><b>Status:</b>  <b className = {statusClass}>{this.state.todo.status ? 'Completed' : 'Pending'}</b></p>
                </div>
                </div>
                <Link to= {{
                        pathname: "/create",
                        aboutProps: {
                            todoDetails: this.state.todo
                             }
                    }}>
                    <button className = "btn blue" type="button">
                        Edit
                    </button>
                </Link>
                <button className = "btn red" onClick={() => this.deleteTodo(this.state.todo.id)}>Delete</button>
                <button className = "btn orange" onClick={() => this.completeTodo(this.state.todo)}>{statusBtnText}</button>
            </div>
        
        )
    }
    
  }
  
  export default TodoDetails;
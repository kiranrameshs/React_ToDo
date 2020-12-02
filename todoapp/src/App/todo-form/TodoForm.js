import React, {Component} from "react"
import './TodoForm.scss';

/**
 * navigated to either to create a new Todo or Edit an existing todo
 * uses the props recieved to decide create/modify --> PUT/POST
 * 
 * */
class TodoForm extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        if(props.location.aboutProps){
            console.log("Modify request")
            this.state = {
                id: props.location.aboutProps.todoDetails.id,
                title: props.location.aboutProps.todoDetails.title,
                description: props.location.aboutProps.todoDetails.description,
                dueDate: props.location.aboutProps.todoDetails.dueDate,
                createReq : false
            }
        }
        else{
            console.log("Create request")
            this.state = {
                id: "",
                title: "",
                description: "",
                dueDate: Date.now,
                createReq : true
            }
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleDateInput = this.handleDateInput.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleDateInput(event) {
        console.log("Date is "+event.target.value)
        this.setState({
            dueDate: event.target.value
        })
    }

    submitForm() {
    const data = {
        "title": this.state.title,
        "description": this.state.description,
        "dueDate": this.state.dueDate,

    };
    console.log("Submitting form")
    const methodtype = this.state.createReq ? 'POST' : 'PUT'
    const id = this.state.id
    fetch('http://localhost:3000/todos/'+id, {
      method: methodtype, 
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
     * Form for title, description, due date to be filled by user with validation
     */
    render() {
        return (
            <div className="login-box">
                <h2>Enter ToDo Details</h2>
                    <form >
                    <div className="user-box">
                        <input 
                            type="text" 
                            value={this.state.title} 
                            name="title" 
                            placeholder="Enter Title" 
                            required
                            onChange={this.handleChange}
                            // ref={register({required: true, maxLength: 100})} 
                        />
                    </div>
                    <div className="user-box">
                    <textarea 
                        onChange={this.handleChange} 
                        placeholder="Enter Description"  
                        name="description"  
                        tabIndex="5" 
                        value={this.state.description}
                        required
                        // ref={register({required: true, maxLength: 100})}
                        />
                        
                    </div>
                    <div className="user-box">
                        <input 
                            type="date" 
                            name="duedate" 
                            onInput={this.handleDateInput}
                            required
                            // ref={register({required: true})} 
                        />
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                <button className = "btn green" onClick={this.submitForm} name="submit" type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default TodoForm

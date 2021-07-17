import moment from "moment";
import { Component } from "react";
import { connect } from "react-redux";

import { add_Reminder ,remove_Reminder,clear_allTasks} from "../actions";
class App extends Component{
    state={
        text:'',
        date: Date(),
         range:''
    }
    render_Reminders = () =>{
        const {reminders} = this.props;
        return(
                <ul className="list-group">
                {
                    reminders.map(reminder=>{
                    
                        return(
                            <li key={reminder.id} className='list-group-item'>
                                <div className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{reminder.text}</h5>
                                    <small className="text-muted">{ moment(new Date(reminder.date)).fromNow() }</small>
                                    </div>
                                    <p className="mb-1">
                                         <label for="customRange1" className="form-label">مستوى التقدم</label>
                                         <input type="range" className="form-range" id="customRange1" ></input>
                                    </p>
                                    <small className="text-muted">
                                        <div className="remove btn btn-danger" onClick={()=>this.props.remove_Reminder(reminder.id)} >X</div>
                                    </small>
                                </div>      
                              </li>
                                )
                            })
                        }
                 </ul>
        )
    }
    render(){
        return(
        <div className="App container">
            {/* <imag src="" /> */}
            <div className="reminder-title">
                <h2 className="text-center">What Should U Do ? </h2>
                </div>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Task"
                    onChange={(e)=>this.setState({text:e.target.value})}
                    value={this.state.text}
                />
                <input
                    className="form-control" 
                    type="datetime-local"
                    onChange={(e)=>this.setState({date:e.target.value})}
                    value={this.state.date}
                />
                <button className="btn btn-primary btn-block" 
                        onClick={()=>
                            {this.props.add_Reminder(this.state.text,this.state.date)
                                this.setState({text:'',date:Date('y')})
                        }} 
                        >
                        Add Task
                </button>
                    
                <button className="btn btn-danger btn-block" onClick={()=>this.props.clear_allTasks()}>Delete All Tasks </button>
                {
                    this.render_Reminders()
                }
            </div>
        );
    }
}
export default connect( state =>{return{reminders:state}} ,{add_Reminder,remove_Reminder,clear_allTasks})(App);
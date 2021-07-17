
import { ADD_REMINDER ,CLEAR_REMINDERS,REMOVE_REMINDER} from "../components/type"

export const add_Reminder=(text,date)=>{
        const action={
            type: ADD_REMINDER,
            text,
            date
        } 
        return action
}
export const remove_Reminder=(id)=>{
    const action={
        type:REMOVE_REMINDER,
        id
    }  
    return action
}
export const clear_allTasks=()=>{
    const action={type:CLEAR_REMINDERS}
    return action
}
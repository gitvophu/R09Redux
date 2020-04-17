const addTaskListAction = (task)=>{
    return {
        type:'ADD',
        payload:{
            task:task
        }
        
    }
}

const deleteTaskListAction = (id) =>{
    return {
        type:'DELETE',
        payload:{
            id:id
        },
    }
}
const toggleTaskStatusAction = (id) =>{
    return {
        type:'TOGGLE_STATIS',
        payload:{
            id:id
        },
    }
}
export {
    addTaskListAction,
    deleteTaskListAction,
    toggleTaskStatusAction,
}
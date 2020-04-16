const addTaskListAction = (task)=>{
    return {
        type:'ADD',
        payload:{
            task:task
        }
        
    }
}

export {
    addTaskListAction
}
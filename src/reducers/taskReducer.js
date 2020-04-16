
const initialState = [
    {title:"Nghiên cứu tài liệu Redux",status:0},
    {title:"Viết báo cáo",status:1}
];
const taskReducer = (state=initialState,action)=>{
    switch(action.type){
        // case 'LIST':
        //     return action.payload.taskList;
        case 'ADD':
            return [...state,action.payload.task];
    }
    return state;
}
export default taskReducer;
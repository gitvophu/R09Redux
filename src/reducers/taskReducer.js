
const initialState = [
    {id:1,title:"Nghiên cứu tài liệu Redux",status:0},
    {id:2,title:"Viết báo cáo",status:1}
];
const taskReducer = (state=initialState,action)=>{
    switch(action.type){
        // case 'LIST':
        //     return action.payload.taskList;
        case 'ADD':
            const task = {...action.payload.task,id:state.length+1};
            return [...state,task];
        case 'DELETE':
            state = state.filter((item)=>item.id!=action.payload.id);
            return [...state];
        case 'TOGGLE_STATIS':
            state = state.map((item)=>{
                if(item.id == action.payload.id){
                    item.status = item.status==0?1:0;
                }
                return item;
            });
            return [...state];
    }
    return state;
}
export default taskReducer;
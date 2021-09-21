const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return {tasks:action.payload};
    
        case "REMOVE":{
            console.log(action.payload)
            return {tasks:action.payload}; 
        }

        default:
            return state;
    }
}

export default taskReducer;
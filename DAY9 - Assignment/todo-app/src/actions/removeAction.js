import todoActions from './actionTypes';

const removeAction = (data) => {
    return(
        {
           type: todoActions.remove ,
           payload: data
        }
    )
    
}

export default removeAction;
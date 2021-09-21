import todoActions from './actionTypes';

const addAction = (data)=>{
    return (
        {
            type: todoActions.add,
            payload: data
        }
    )
}

export default addAction;
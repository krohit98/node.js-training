import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import restaurantsRequestAction from '../../actions/restaurants-actions/restaurantsRequestAction';
import RestaurantList from '../../components/restaurant-list/restaurantList.component';

const RestaurantTable = () =>{
    const dispatch = useDispatch();

    const getState = () =>{
        dispatch(restaurantsRequestAction());
    }

    useEffect(()=>getState(),[]);

    const currentState = useSelector(state=>state.restaurants);

    return(
        <div>
            {currentState.error?
            <div className="alert-danger response-div">
                <p className="h4">Oops! Cannot fetch restaurant data</p>
                <b>Error</b>:<br/> {currentState.error}
            </div>
            :
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th className="col-2">Name</th>
                        <th className="col-2">Location</th>
                        <th className="col-1">Price for Two</th>
                        <th className="col-1">Rating(5)</th>
                        <th className="col-1">Serves</th>
                    </tr>
                </thead>
                <tbody>
                    {currentState.restaurants.map((data)=>{
                        return(                            
                            <RestaurantList key={data._id} {...data} />  
                        )
                    })}
                </tbody>
            </table>
            }
        </div>
    )
}

export default RestaurantTable;
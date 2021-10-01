import React from 'react';
import './restaurantList.component.css';
import { useHistory } from 'react-router';

const RestaurantList = ({...data}) =>{

    const history = useHistory();

    return(
        <tr>
            <td>
                <button className="list-btn" onClick={()=>history.push(`/discovery/${data.name}`)}>{data.name}</button>
            </td>
            <td>{data.location}</td>
            <td>{data.price_for_two}</td>
            <td>{data.rating}</td>
            <td>{data.serves}</td>
        </tr>
    )
}

export default RestaurantList;
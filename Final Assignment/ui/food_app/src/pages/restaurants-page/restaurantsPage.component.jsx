import React from 'react';
import RestaurantTable from '../../components/restaurant-table/restaurantTable.component';

const RestaurantPage = () =>{

    return(
        <div className="container pageDiv">
            <h1 className="display-2 pageHeading">List of Places</h1>
            <RestaurantTable />
        </div>
    )
}

export default RestaurantPage;
import React from 'react';
import './homePage.component.css';
import { useHistory } from 'react-router';

const HomePage = () =>{

    const history = useHistory();
    
    return(
        <div className="pageDiv homePageDiv">
            <h1 className="display-1 pageHeading">Welcome to Food Service</h1>
            <div className="getList-btn-div">
                <button className="getList-btn app-btn" onClick={()=>history.push("/discovery")}>Discover Food Joints</button>
            </div>
        </div>
    )
}

export default HomePage;
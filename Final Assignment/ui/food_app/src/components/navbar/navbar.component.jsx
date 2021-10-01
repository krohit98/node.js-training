import React from 'react';
import './navbar.component.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import logoutRequestAction from '../../actions/login-actions/logoutRequestAction';

const Navbar = () =>{

    const dispatch = useDispatch();
    const history = useHistory();

    const currentState = useSelector(state=>state.login);

    const logoutHandler = (e) =>{
        e.preventDefault();
        dispatch(logoutRequestAction());
        localStorage.removeItem("user_token");
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark header-nav px-5">
                <button className="header-btn" onClick={()=>history.push("/")}>Home</button>
                {currentState.user_id?
                    <div>
                        <span id="userInfo">Logged in as {currentState.user_name}</span>
                        <button className="header-btn ms-3" onClick={logoutHandler}>Logout</button>
                    </div> 
                :
                    <div>
                        <button className="header-btn" onClick={()=>history.push("/signup")}>Sign Up</button>
                        <button className="header-btn ms-3" onClick={()=>history.push("/signin")}>Sign In</button>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navbar;
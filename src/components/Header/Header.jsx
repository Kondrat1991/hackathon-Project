import React from 'react';
import './Header.css';
import {Navbar, NavItem, Icon} from 'react-materialize';

const Header = () => {
    return (
        <Navbar brand='logo' right>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
        </Navbar>



        /*{/!*<div className='header'>*!/}
            {/!*<a href="" className='header-logo'>Qoute</a>*!/}
            {/!*<div className='header-nav'>*!/}
                {/!*{*!/}
                    {/!*props.isLogin*!/}
                        {/!*? <button className="header-button" onClick={props.logout}>Log Out</button>*!/}
                        {/!*: <div>*!/}
                            {/!*<button className="header-button" onClick={props.toggleShowRegistration}>Sign Up</button>*!/}
                            {/!*<button className="header-button" onClick={props.toggleShowLogin}>Login</button>*!/}
                        {/!*</div>*!/}
                {/!*}*!/}
            {/!*</div>*!/}
        {/!*</div>*!/}*/
    )
};

/*const MSTP = (state) => {
    return {
        isLogin: state.isLogin,
    }
};

const MDTP = (dispatch) => {
    return {
        logout: function () {
            localStorage.removeItem('token');
            dispatch(logOut());
        }
    }
};*/

export default Header;
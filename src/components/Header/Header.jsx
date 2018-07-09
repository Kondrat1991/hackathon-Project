import React from 'react';
// import './Header.css';
import {connect} from 'react-redux';
import {logOut} from '../../actions/headerAction';
import toggleShowLogin from '../../actions/toggleLoginAction';
import toggleShowRegistration from '../../actions/toggleRegistrationAction';
import {Navbar, NavItem} from 'react-materialize';

const Header = (props) => {
    return (
        <Navbar brand='logo' right>
            {
                props.isLogin
                    ? <NavItem onClick={props.logout}>LOG OUT</NavItem>
                    : <div>
                        <NavItem onClick={props.toggleShowRegistration}>SIGN UP</NavItem>
                        <NavItem onClick={props.toggleShowLogin}>SIGN IN</NavItem>
                    </div>
            }
        </Navbar>
    )
};

const MSTP = (state) => {
    return {
        isLogin: state.isLogin,
    }
};

const MDTP = (dispatch) => {
    return {
        logout: function () {
            localStorage.removeItem('token');
            dispatch(logOut());
        },

        toggleShowLogin: function () {
            dispatch(toggleShowLogin())
        },

        toggleShowRegistration: function () {
            dispatch(toggleShowRegistration())
        }
    }
};

export default connect(MSTP, MDTP)(Header);
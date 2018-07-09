import React from 'react';
import './Main.css';
import PostList from '../PostList/PostList';
import SideBar from '../Sidebar/Sidebar';
import {Route} from 'react-router-dom';


const Main = (props) => {
    return (
        <div className="total-wrapper">
            <div className="sideBar">
                <SideBar/>
            </div>
            <div className="flex-wrapper">
                <Route path='/posts' component={PostList}/>
            </div>
        </div>
    )
};

export default Main;
import React, { Component, Fragment } from "react";
import "./App.css";
// import  {Route} from 'react-router-dom';

import Header from './components/Header/Header';
// import Main from "../Main/Main";

class App extends Component {
  render() {
    return (
      <Fragment>
         <Header />
        {/*<Main />*/}
      </Fragment>
    );
  }
}

export default App;

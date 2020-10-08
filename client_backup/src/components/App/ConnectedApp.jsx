import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import React from "react";
import {history} from "../../history/history";
import {LoginPage} from "../../pages/Login/LoginPage";
import {RegisterPage} from "../../pages/Register/RegisterPage";
import {CMainPage} from "../../pages/Main/MainPage";


export const CApp = () => {
    return (
        <Router history = {history}>
            <Provider store={store}>
                <Switch>
                    <Route path='/login' component={ LoginPage } />
                    <Route path='/register' component={ RegisterPage } />
                    <Route path='/' component={ CMainPage } />
                </Switch>
            </Provider>
        </Router>
    )
};

import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {Container} from "../Login/styledLogin";
import {mainUsersAction} from "../../thunk/thunk";
import {actionLogout} from "../../actions/actions";
import {Button} from "./styledMain";

const MainPage = ({loggedIn, getUsers, users, logOut}) => {

    useEffect(()=> {
        getUsers();
    }, []);

  return loggedIn
      ? (<Container>
          <Button onClick = {logOut}>
              Log Out
          </Button>
            <ul>
                { users && users.map(user =>
                        <li key={user.iduser}>
                            <p>{'NAME: '+ user.username}</p>
                            <p>{'LOGIN: ' + user.login}</p>
                        </li>)}
            </ul>
      </Container>)
      : (<Redirect to='/login'/>)
};

const MS2P = state => {
    return {
        loggedIn: state.user && state.user.loggedIn,
        users: state.status.users && state.status.users.users,
    }
};

const MD2P = {
    getUsers: mainUsersAction,
    logOut:actionLogout,
};

export const CMainPage = connect(MS2P, MD2P)(MainPage);
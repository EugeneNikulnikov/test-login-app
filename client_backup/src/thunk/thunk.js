import {actionGetUsers,
        actionPending,
        actionRegistration,
        actionRejected,
        actionResolved} from "../actions/actions";
import {msgFetch, msgFetchGET} from "../api/testFetch";
import {actionAuthLogin} from '../actions/actions'
import {history} from '../history/history'

function actionPromise(Promise, name){
    return async function (dispatch){
        dispatch(actionPending(name));
        try {
            let data = await Promise;
            dispatch(actionResolved(data, name));
            return data;
        }
        catch (e) {
            dispatch(actionRejected(e, name))
        }
    }
}

export function loginAction( data, name){
    return async dispatch => {
            let res = await dispatch(actionPromise(msgFetch("http://localhost:3001/login", data, 'POST'), name));
            dispatch(actionAuthLogin(res));
            history.push('/');
    }
}

export function registerAction(data, name){
    return async dispatch => {
        let res = await dispatch(actionPromise(msgFetch("http://localhost:3001/register", data, 'POST'), name));
        dispatch(actionRegistration({...res, name}));
        history.push('/');
    }
}

export function mainUsersAction(){
    return async dispatch => {
        let res = await dispatch(actionPromise(msgFetchGET("http://localhost:3001/main",  'GET'), 'users'));
    }
}
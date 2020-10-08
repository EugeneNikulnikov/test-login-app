import {loginAction} from "../thunk/thunk";


export const loginSubmit = (data) => {
    return loginAction(
                    {data},
                    'userData');
};
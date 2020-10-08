import {registerAction} from "../thunk/thunk";

export const registerSubmit = (data) => {
    return registerAction(
        {data},
        'registerMessage');
};
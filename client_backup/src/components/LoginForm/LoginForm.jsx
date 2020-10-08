import React from 'react';
import {Button, SForm} from "../StyledComponents/StyledComponents"
import {loginSubmit} from "../../helpers/loginButtonSubmit";
import {connect, useDispatch} from "react-redux";
import {useForm} from "react-hook-form";


export const LoginForm = ({loginMessage}) => {
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data =>{
        dispatch(loginSubmit(data));
    };

    return(
        <SForm onSubmit={handleSubmit(onSubmit)}>
            <p>{loginMessage || ''}</p>

            <label htmlFor="login">Login</label>
            <input
                placeholder='Login'
                name='login'
                ref={register({
                required: "Required",
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,255}$/,
                    message: "Invalid login!",
                }
            })} type="text" id="login"/>
            <p>{errors.login && errors.login.message}</p>

            <label htmlFor="password">Password</label>
            <input
                placeholder='Password'
                name='password'
                ref={register({
                required: "Required",
                pattern: {
                    value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,255}$/,
                    message: "Invalid password",
                }
            })}  type="password" id="password"/>
            <p>{errors.password && errors.password.message}</p>


            <Button type="submit">OK</Button>
        </SForm>
    )
};

const MS2P = state => {
    return {
        loginMessage: state.user && state.user.loginMessage,
    }
};

export const CLoginForm = connect(MS2P)(LoginForm);
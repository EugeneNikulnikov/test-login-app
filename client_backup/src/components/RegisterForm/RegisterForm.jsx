import React, {useState} from "react";
import {Button, SForm} from "../StyledComponents/StyledComponents";
import {registerSubmit} from "../../helpers/registerButtonSubmit";
import {connect, useDispatch} from "react-redux";
import {useForm} from "react-hook-form";


export const RegisterForm = ({registerMessage}) => {
  const dispatch = useDispatch();
  const {register, handleSubmit, errors} = useForm();
  const [passwordState, setState] = useState();
  const regExpPasswordConfirm = new RegExp(passwordState);
  const onSubmit = data =>{
      dispatch(registerSubmit(data));
  };
  return(
      <SForm onSubmit={handleSubmit(onSubmit)}>
          <p>{registerMessage || ''}</p>

          <label htmlFor="name">Name</label>
          <input
              placeholder='Name'
              name='name'
              ref={register({
                  required: "Required",
                  pattern: {
                      value: /[0-9a-zA-Z]{2,255}$/,
                      message: "Invalid name",
                  }
              })}  type="text" id="password"/>
          <p>{errors.name && errors.name.message}</p>

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
              onInput={(e) => setState(e.target.value)}
              placeholder='Password'
              name='password'
              ref={register({
                  required: "Required",
                  pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,255}$/,
                      message: "Invalid password",
                  }
              })}  type="password" id="password"/>
          <p>{errors.password && errors.password.message}</p>

        <label htmlFor="password_confirm"> Confirm the Password</label>
          <input
              name='password_confirm'
              ref={register({
                  required: "Required",
                  pattern: {
                      value: regExpPasswordConfirm,
                      message: "Passwords do not match",
                  }
              })}  type="password" id="password_confirm"/>
          <p>{errors.password_confirm && errors.password_confirm.message}</p>
        <Button type = "submit">OK</Button>
      </SForm>
  )
};


const MS2P = state => {
    return {
        registerMessage: state.user && state.user.registerMessage,
    }
};

export const CRegisterForm = connect(MS2P)(RegisterForm);
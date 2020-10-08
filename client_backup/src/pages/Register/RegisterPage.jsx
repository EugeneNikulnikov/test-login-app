import React from "react";
import {Container} from "./styledRegister";
import {CPreloader} from "../../components/Preloader/Preloader";
import {CRegisterForm} from "../../components/RegisterForm/RegisterForm";
import {LinkButton} from "../../components/StyledComponents/StyledComponents";

export const RegisterPage = () => {
  return (
      <Container>
          <LinkButton to={'/login'}>Sign In</LinkButton>
          <CPreloader/>
          <CRegisterForm/>
      </Container>
  )
};
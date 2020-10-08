import React from "react";
import {CLoginForm} from "../../components/LoginForm/LoginForm";
import {CPreloader} from "../../components/Preloader/Preloader";
import {Container} from "./styledLogin";
import {LinkButton} from "../../components/StyledComponents/StyledComponents";

export const LoginPage = () => {
    return(
        <Container>
            <LinkButton to={'/register'}>Sign Up</LinkButton>
            <CPreloader/>
            <CLoginForm/>
        </Container>
    )

};
import styled from 'styled-components'
import {Link} from "react-router-dom";

export const SForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    max-width: 200px;
    padding: 10px;
    p {
      font-size: 10px;
      color: #f00;
      margin: 2px 0 5px;
    }
`;

export const Button = styled.button `
    align-self: center;
    width: 70px;
    margin-top: 5px;
    border-radius: 4px;
    background-color: #ABCDEF;
    border-color: #afafaf;
`;

export const LinkButton = styled(Link)`
    width: 70px;
    margin-top: 5px;
    align-self: flex-end;
    border: 2px solid #666;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    background-color: #ABCDEF;
    color: #000; 
`;
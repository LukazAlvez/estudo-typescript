import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body{
        height: 100%;
    }

    button{
        border: none;
        background-color: none;
        outline: none;
    }

    a{
        text-decoration: none;
        outline: none;
    }
`
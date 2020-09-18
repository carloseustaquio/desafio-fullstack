import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    html, body, #root{
      height: 100%;
      background: #eee;
      overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: none;
        -webkit-text-fill-color: #eee;
        -webkit-box-shadow: 0 0 0px 1000px trasparent inset;
        transition: background-color 5000s ease-in-out 0s;
        font-size: unset;
    }

`;

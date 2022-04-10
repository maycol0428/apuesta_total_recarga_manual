import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";
import { override } from "./override";
import { reset } from "./reset";
export const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${reset}   
    ${override}
    .page{
        padding: 0rem 2rem;       
        flex:1; 
    }
    .page__wrapper{
        max-width: 1600px;
        margin: auto;
    }
`;

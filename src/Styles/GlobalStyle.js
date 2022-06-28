import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, button,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, select, text-area {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Itim', cursive;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    -webkit-text-fill-color: #FFFFFF !important;
    -webkit-box-shadow: 0 0 0px 1000px var(--MainDark) inset;
    box-shadow: 0 0 0px 1000px var(--MainDark) inset;
    }
    ol, ul {
        list-style: none;
    }
    
    :root{
        font-size: 8px;
        --MainDark: #031319;
        --MainLigth: #B2C0C6;
        --CardDark: #3B464B; 
        --CardsLight: #D9D9D9;
        --HeaderDark: #ac0000;
        --HeaderLight: #db2121;
        --BtnConfirmDark: #09764F;
        --BtnConfirmLight: #0CBA7B;
        --BtnDark: #7B0000;
        --BtnLight: #F66565;
        --ColorCardGroupInscribedDark: #CC4A01;
        --ColorCardGroupInscribedLight: #EB7736;
        --ColorCardGroupNotInscribedDark: #760000;
        --ColorCardGroupNotInscribedLigth: #BC4343;
        --plusDark: #ac0000;
        --plusLigth: #db2121
    }
    body{
        background-color: var(--MainDark);
    }
    .Toastify__toast{
        background-color: var(--CardDark);
        color: #fff;
        font-size: 2.5rem;
        svg{
            color: #fff;
        }
    }
`;

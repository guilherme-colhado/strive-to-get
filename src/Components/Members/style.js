import styled from "styled-components";

export const MembersComponent = styled.div`
    padding: 10px;
    margin: 0 auto;
    background-color: var(--CardDark);
    border-radius: 10px;
    width: max-content;
    height: max-content;
    padding: 20px 10px;
    margin-top: 20px;
    width: 99%; 
    h1{
        color: white;
        font-size: 3rem;
    }
    ul{ 
        color: white;
        font-size: 2rem;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        margin: 5px 10px;
    }
`
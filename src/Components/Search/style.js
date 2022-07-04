import styled from "styled-components";

export const SearchComponent = styled.div`
    background-color: var(--CardDark);
    border: none;
    padding: 7px;
    width: max-content;
    display: flex;
    margin: 20px auto;
    transition: all .3s ease-in;
    justify-content: center;
    border-radius: 10px;
    :focus{
        input{
            
        }
    }
`

export const InputSearch = styled.input`
    font-size: 2.5rem;
    width: ${props => props.open ? '200px' : '0'};
    transition: all .3s ease-in;
    padding: 0;
    color:white;
    background-color: transparent;
    border: none;
    :focus{
        outline: none;
    }
`

export const ButtonSearch = styled.button`
    font-size: 2.5rem;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 3px 5px;
    border-radius: 100%;
`
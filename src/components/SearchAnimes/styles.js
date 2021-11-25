import styled from "styled-components";

export const SearchArea = styled.section`
    padding: 2rem;
`;

export const SearchForm =styled.form`
    width: 40rem;
    margin: 0 auto;
    padding: 2rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    
    @media screen and (max-width: 960px){
        width: 27rem;
    }

`;

export const SearchFormControl = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchTitle = styled.h2`
    font-size: 1.1rem;
    color: #FFFFFF;
    margin-right: 0.5rem;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px;
    color: #FFFFFF;
    background: #363636;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1.1rem;
`;
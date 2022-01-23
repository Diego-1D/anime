import styled from "styled-components";

export const SearchArea = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SearchForm =styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 60%;
    border: 1px solid #000;
    color: #FFFFFF;
    background-color: #363636;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1.1rem;   

    @media(max-width: 669px){
        width: 100%;
    }
`;
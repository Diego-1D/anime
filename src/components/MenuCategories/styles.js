import styled from "styled-components";

export const Container = styled.nav`
    width: 23vw;
    height: 100vw;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #050303;
    padding: 4.5rem;
    position: ${({ menuFixed }) => (menuFixed ? 'fixed' : 'relative')};

    @media screen and (max-width: 1200px){
        width: 23vw;
    }

    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #FFF;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`;

export const CategoryLink = styled.button`
    font-size: 1.2rem;
    font-weight: 100;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: #363636;
    color: #FFF;
    width: 12rem;
    height: 2.5rem;
    margin: 0.3rem 0;
    cursor: pointer;
`;
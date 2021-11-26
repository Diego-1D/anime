import styled from "styled-components";

export const Container = styled.div`
    width: 77vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #050303;
    margin-left: ${({ menuFixed }) => (menuFixed ? '23vw': '0')};
    @media screen and (max-width: 900px){
        width: 100%;
        margin-left: 0;
    }
`;

export const AnimeArea = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(4, 1fr);  
    }
    @media screen and (max-width: 1000px){
        grid-template-columns: repeat(3, 1fr);  
    }
    @media screen and (max-width: 660px){
        grid-template-columns: repeat(2, 1fr);  
    }
`;

export const Message = styled.h2`
    font-size: 1.5rem;
    text-transform: capitalize;
    text-align: center;
    color: #FFF;
`;
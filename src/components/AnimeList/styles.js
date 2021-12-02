import styled from "styled-components";

export const Container = styled.div`
    width: 77vw;
    height: auto;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #050303;
    padding: 2rem;
    margin-left: ${({ menuFixed }) => (menuFixed ? '23vw': '0')};
   
    @media screen and (max-width: 900px){
        width: 100%;
        margin-left: 0;
    }
`;

export const AnimeArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Message = styled.h2`
    font-size: 1.5rem;
    text-transform: capitalize;
    text-align: center;
    color: #FFF;
`;
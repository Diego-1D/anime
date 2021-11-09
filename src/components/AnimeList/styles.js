import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #050303;
    padding: 0 3rem;
    margin-left: 20%;

`;

export const AnimeArea = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
`;

export const Message = styled.h2`
    font-size: 1.1rem;
    color: #FFFFFF;
`;
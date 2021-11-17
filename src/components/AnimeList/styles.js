import styled from "styled-components";

export const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #050303;
    padding: 0 3rem;
    margin-left: ${({ menuFixed }) => (menuFixed ? '25%': '0')};
`;

export const AnimeArea = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem 1rem;
`;

export const Message = styled.h2`
    font-size: 1.1rem;
    color: #FFFFFF;
`;

export const Card = styled.article`
    width: 160px;
    height: 300px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 230px;
`;
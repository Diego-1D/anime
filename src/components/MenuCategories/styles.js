import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #050303;
`;

export const Title = styled.h1`
   font-size: 1.5rem;
   text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #FFF;
`;

export const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
`;

export const CategoryLink = styled(Link)`
    font-size: 1.3rem;
    font-weight: 100;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #FFF;
    padding: 0.5rem;
`;
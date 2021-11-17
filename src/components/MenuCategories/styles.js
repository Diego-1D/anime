import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    width: 25%;
    display: flex;
    flex-direction: column;
    background-color: #050303;
    padding: 4.5rem 0;
    top: 0;
    position: ${({ menuFixed }) => (menuFixed ? 'fixed' : 'relative')};
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
    padding: 4rem 3.5rem;
`;

export const CategoryLink = styled.button`
    font-size: 1.3rem;
    font-weight: 100;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #FFF;
    padding: 0.5rem;
    text-decoration:none;
    cursor: pointer;
`;
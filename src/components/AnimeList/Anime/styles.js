import styled from "styled-components";

export const Card = styled.div`
    width: 165px;
    height: 300px;
    display: inline-block;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.2s;
    margin-bottom: 1.5rem;

    &:hover{
      transform: scale(1);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
`;

export const Title = styled.h2` 
  font-size: 16px;
  letter-spacing: 1px;
  color: #FFF;

  @media screen and (max-width: 900px){
    font-size: 14px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: pink;
  padding: 3rem;
`;

export const AnimeArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

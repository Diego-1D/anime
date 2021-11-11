import styled from "styled-components";

export const Container = styled.section`
  height: 68vh;
  background-repeat: no-repeat;
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height:inherit;
  background:  linear-gradient(to top, #050303 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right,  #050303 30%, transparent 70%);
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Description = styled.h2`
  font-size: 20px;
  color:#999;
  max-width: 40%;
`;

export const Info = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Year = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #FFFF;
`;

export const Points = styled.h3`
  color: #46d369;
`;

export const Seasons = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #FFFF
`;
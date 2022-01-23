import styled from "styled-components";

export const Container = styled.section`
  height: 68vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 760px){
    height: auto;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #FFFFFF;

  @media screen and (max-width: 760px){
    font-size: 35px;
  }
`;

export const Info = styled.div`
  width: 25vw;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
  gap: 1rem;

  @media screen and (max-width: 760px){
    grid-template-columns: repeat(3, 100px);
    font-size: 11px;
    gap: 0  .5rem;
  }
`;

export const Description = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: justify;
  color: #999;
  max-width: 50vw;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 760px){
    font-size: 18px;
    max-width: 70vw;
  }  
`;

export const Year = styled.h3`
  font-weight: bold;
  color: #FFFFFF;
  border: solid 1px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0.2rem ;
`;

export const Points = styled.h3`
  color: #46d369;
  border: solid 1px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0.2rem ;
`;

export const Seasons = styled.h3`
  font-weight: bold;
  color: #FFFFFF;
  border: solid 1px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0.2rem ;
`;
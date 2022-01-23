import styled from "styled-components";

export const Container = styled.div`
    flex: 0.9;
    height: auto;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    
    @media screen and (max-width: 900px){
        flex: 1;
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

export const Wrapper = styled.div`
    width: 90%;
    display: none;

    @media screen and (max-width: 900px){
        display: block;
    }
`;

export const Title = styled.h2`
    font-size: 18px;
    color: #FFF;
    margin-bottom: 10px;
    letter-spacing: 1px;
`;
export const Select = styled.select`
    padding: 0.4rem 0.2rem;
    font-size: 15px;
    background-color: #363636;
    color: #FFF;
    border-radius: 5px;
`;  

export const Option = styled.option`
    font-size: 12px;
`;
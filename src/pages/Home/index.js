import React from 'react';
import FeatureAnime from '../../components/FeatureAnime';
import Hero from '../../components/Hero';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: #050303;
`;

const Home = () => {

    return (
        <Container>
            <Hero />
            <FeatureAnime />
        </Container>
    )
}

export default Home;
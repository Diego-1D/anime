import React from 'react';
import FeatureAnime from '../../components/FeatureAnime';
import Hero from '../../components/Hero';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';

const Container = styled.div`
    width: 100%;
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
import React from 'react';
import AnimeList from '../AnimeList';
import MenuCategories from '../MenuCategories';
import { 
    Container
} from './styles';

const FeatureAnime = () => {
    return (
    <Container>
        <MenuCategories/>
        <AnimeList/>
    </Container>
)
}

export default FeatureAnime;
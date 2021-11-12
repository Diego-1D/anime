import React, { useState, useEffect } from 'react';
import AnimeList from '../AnimeList';
import MenuCategories from '../MenuCategories';
import { useGlobalContext } from '../../context';
import { useLocation } from 'react-router';
import {
    Container
} from './styles';

const allCategories = ['Todos', 'Drama', 'Fantasy', 'Mahou Shoujo', 'Mystery', 'Psychological', 'Thriller', 'Alternate Universe', 'Anti-Hero']


const FeatureAnime = () => {

    const { animes } = useGlobalContext();
    const [categories, setCategories] = useState(allCategories);
    return (
        <Container>
            <MenuCategories categories={categories} />
            <AnimeList animes={animes}/>
        </Container>
    )
}

export default FeatureAnime;
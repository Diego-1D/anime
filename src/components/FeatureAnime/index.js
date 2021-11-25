import React, { useState, useEffect } from 'react';
import AnimeList from '../AnimeList';
import MenuCategories from '../MenuCategories';
import { useGlobalContext } from '../../context';
import { Container } from './styles';
import { useLocation } from 'react-router';

const allCategories = [
    'Todos',
    'Comedy',
    'Action',
    'Mahou Shoujo',
    'Mystery',
    'Psychological',
    'Thriller',
    'Alternate Universe',
    'Anti-Hero',
    'Espionage']

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const FeatureAnime = () => {
    let query = useQuery();
    const { animes } = useGlobalContext();
    const [categories, setCategories] = useState(allCategories);
    const [menufixed, setMenuFixed] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(animes);
    }, [animes]);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 438) {
                setMenuFixed(true);
            } else {
                setMenuFixed(false);
            }
        };
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    const filterAnime = (category) => {
        if (category === 'Todos') {
            setMenuItems(animes);
            return;
        }
        const newGenres = [...animes];
        let filtro = [];
        for (let i in newGenres) {
            const filter = newGenres[i].genres;
            console.log(filter);
            for (let j in filter) {
                if (filter[j] === category) {
                    filtro.push(newGenres[i]);
                }
            }
        }
        setMenuItems(filtro);
    };

    useEffect(() => {
        let category = query.get('genres');
        if (category != null) {
            filterAnime(category);
        }

        setMenuItems(filtro);
    })

    return (
        <Container>
            <MenuCategories filterAnime={filterAnime} categories={categories} menuFixed={menufixed} />
            <AnimeList animes={menuItems} menuFixed={menufixed} />
        </Container>
    )
}

export default FeatureAnime;

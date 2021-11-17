import React, { useState, useEffect } from 'react';
import AnimeList from '../AnimeList';
import MenuCategories from '../MenuCategories';
import { useGlobalContext } from '../../context';
import Loading from "../Loading";
import {
    Container
} from './styles';
import { useLocation } from 'react-router';

const allCategories = ['Todos', 'Comedy', 'Action', 'Mahou Shoujo', 'Mystery', 'Psychological', 'Thriller', 'Alternate Universe', 'Anti-Hero']

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const FeatureAnime = () => {
    const {loading} = useGlobalContext();
    let query = useQuery();
    const { animes } = useGlobalContext();
    const [categories, setCategories] = useState(allCategories);
    const [menufixed, setMenuFixed] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(animes);        
    }, [animes])
    
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 450) {
                setMenuFixed(true);
            } else {
                setMenuFixed(false);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    const filterAnime = (a) => {
        if (a === 'Todos') {
            setMenuItems(animes);

        }
        const newAnime = animes.filter((item)=> item.genres[2] === a);
        setMenuItems(newAnime);
    }

    useEffect(()=>{
        let a = query.get('genres');
        if (a != null){
            filterAnime(a);
        }
    },[]);

    if (loading) {
        return <Loading/>
      }

    return (
        <Container>
            <MenuCategories filterAnime={filterAnime} categories={categories} menuFixed={menufixed} />
            <AnimeList animes={menuItems} menuFixed={menufixed} />
        </Container>
    )
}

export default FeatureAnime;
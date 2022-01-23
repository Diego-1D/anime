import React, { useState, useEffect } from "react";
import AnimeList from "../AnimeList";
import MenuCategories from "../MenuCategories";
import Loading from "../Loading";
import { useGlobalContext } from "../../context";
import { Container } from "./styles";
import { useLocation } from "react-router";

const allCategories = [
    "Todos",
    "Comedy",
    "Action",
    "Mahou Shoujo",
    "Mystery",
    "Psychological",
    "Thriller",
    "Alternate Universe",
    "Anti-Hero",
];

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const FeatureAnime = () => {
    let query = useQuery();
    const { animes } = useGlobalContext();
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState([]);    

    useEffect(() => {
        setMenuItems(animes);
    }, [animes]);
    
    const filterAnime = (category) => {
        setMenuItems([]);
        if (category === "Todos") {
            setMenuItems(animes);
            return;
        }
        const newGenres = [...animes];
         
        let filtro = [];
       
        for (let i in newGenres) {
            const filter = newGenres[i].genres;
            for (let j in filter) {
                if (filter[j] === category) {
                    filtro.push(newGenres[i]);
                }
            }
        }
        setMenuItems(filtro);
    };

    useEffect(() => {  
        let category = query.get("genres");
        if (category != null) {
            filterAnime(category);
        }
    }, []);


    return (
        <Container>
            <MenuCategories filterAnime={filterAnime} categories={categories}/>
            <AnimeList animes={menuItems} filterAnime={filterAnime} categories={categories}/>
        </Container>
    );
};

export default FeatureAnime;
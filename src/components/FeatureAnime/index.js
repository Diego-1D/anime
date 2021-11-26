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
    const { loading } = useGlobalContext();
    let query = useQuery();
    const { animes } = useGlobalContext();
    const [categories, setCategories] = useState(allCategories);
    const [menufixed, setMenuFixed] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [genres, setGenres] = useState([]);

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

    const filterAnime = (a) => {
        if (a === "Todos") {
            setMenuItems(animes);
            console.log("", animes);
            return;
        }

        const newGenres = [...animes];

        let filtro = [];

        for (let i in newGenres) {
            const filter = newGenres[i].genres;
            for (let j in filter) {
                if (filter[j] === a) {
                    filtro.push(newGenres[i]);
                }
            }
        }

        setMenuItems(filtro);

    };

    useEffect(() => {
        let a = query.get("genres");
        if (a != null) {
            filterAnime(a);
        }
    }, []);


    return (
        <Container>
            <MenuCategories
                filterAnime={filterAnime}
                categories={categories}
                menuFixed={menufixed}
            />
            <AnimeList
                animes={menuItems}
                menuFixed={menufixed}
            />
        </Container>
    );
};

export default FeatureAnime;
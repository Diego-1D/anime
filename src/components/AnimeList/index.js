import React from "react";
import {
    Container,
    AnimeArea
} from './styles';
import { useGlobalContext } from '../../context/index';
import Anime from "./Anime";

const AnimeList = () => {
    const { animes } = useGlobalContext();
  console.log('Teste: ', animes)
    return (
        <Container>
            <AnimeArea>
                {
                    animes.map((item) => {
                      return<Anime key={item.id} {...item} />
                    })
                }

            </AnimeArea>
        </Container>
    )
}

export default AnimeList;
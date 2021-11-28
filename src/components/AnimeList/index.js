import React from "react";
import { Container, AnimeArea, Message } from "./styles";
import SearchAnime from '../SearchAnimes';
import Anime from "./Anime";
import { useGlobalContext } from "../../context";
import ReactLoading from 'react-loading';

const AnimeList = ({ animes, menuFixed }) => {

  const { loading } = useGlobalContext();

  return (
    <Container menuFixed={menuFixed}>

      <SearchAnime />
      {loading ?
        <ReactLoading type={'spin'} color={'#FFFFFF'} height={'8%'} width={'8%'} />
        :
        animes.length < 1 &&
        <Message>Nenhum anime foi encontrado!</Message>
      }
      <AnimeArea>
        {animes.map((item) => {
          return (
            <Anime key={item.id} data={item} />
          );
        })}
      </AnimeArea>

    </Container>
  );
};

export default AnimeList;
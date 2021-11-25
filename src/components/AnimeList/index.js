import React from "react";
import { Container, AnimeArea, Message } from "./styles";
import SearchAnime from '../SearchAnimes';
import Anime from "./Anime";

const AnimeList = ({ animes, menuFixed }) => {


  return (
    <Container menuFixed={menuFixed}>
      <SearchAnime />
      {animes.length < 1 &&
        <Message>Nenhum anime foi encontrado!</Message>
      }
      <AnimeArea>

        {animes.map((item) => {
          //alterei a forma como tu tá enviando os parametros para o componente filho
          // return <Anime key={item.id} {...item}/>
          return <Anime key={item.id} data={item} />;
        })}
      </AnimeArea>
    </Container>
  );
};

export default AnimeList;

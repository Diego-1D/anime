import React from "react";
import { Container, AnimeArea, Message } from "./styles";
import { useGlobalContext } from "../../context/index";
import SearchAnime from '../SearchAnimes';
import Anime from "./Anime";

const AnimeList = () => {
  const { animes } = useGlobalContext();

  if (animes.length < 1){
    return(
      <Message>Nenhum anime foi encontrado!</Message>
    )
  }
  return (
    <Container>
      <SearchAnime />
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
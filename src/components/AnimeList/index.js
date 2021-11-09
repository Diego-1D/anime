import React from "react";
<<<<<<< HEAD
import { Container, AnimeArea, Message } from "./styles";
import { useGlobalContext } from "../../context/index";
import SearchAnime from '../SearchAnimes';
=======
import { Container, AnimeArea } from "./styles";
import { useGlobalContext } from "../../context/index";
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
import Anime from "./Anime";

const AnimeList = () => {
  const { animes } = useGlobalContext();
<<<<<<< HEAD

  if (animes.length < 1){
    return(
      <Message>Nenhum anime foi encontrado!</Message>
    )
  }
  return (
    <Container>
      <SearchAnime />
=======
  console.log("aqui os animes: ", animes);

  console.log("Teste: ", animes);
  return (
    <Container>
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
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

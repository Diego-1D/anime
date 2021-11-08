import React from "react";
import { Container, AnimeArea } from "./styles";
import { useGlobalContext } from "../../context/index";
import Anime from "./Anime";

const AnimeList = () => {
  const { animes } = useGlobalContext();
  console.log("aqui os animes: ", animes);

  console.log("Teste: ", animes);
  return (
    <Container>
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

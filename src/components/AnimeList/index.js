import React from "react";
import { Container, AnimeArea, Message, Wrapper, Select, Option, Title } from "./styles";
import SearchAnime from '../SearchAnimes';
import Anime from "./Anime";
import { useGlobalContext } from "../../context";
import ReactLoading from 'react-loading';

const AnimeList = ({ animes, categories, filterAnime }) => {

  const { loading } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <Title>Categorias</Title>
        <Select
          onClick={(e) => filterAnime(e.target.value)}
        >
          {
            categories.map((item, key) =>
              <Option value={item} key={key}>{item}</Option>
            )
          }
        </Select>
      </Wrapper>
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
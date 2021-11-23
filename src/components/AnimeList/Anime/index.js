import React from "react";
import { Card, CardImage, Title } from "./styles";

//alterei a forma como recebe os parametros do componente pai
//const Anime = ({ id, image, titles }) => {

const Anime = ({ data }) => {

  //então inseri os dados nos componentes, puxando a partir de 'data'

  return (
    //observa que aqui, qdo puxo o title, eu puxo tbm do atributo que tá dentro dele (tem titulo em ingles e em japones)
    <Card>
      <CardImage src={data.image} alt={data.id} />
      <Title>{data.titles.en}</Title>
      <Title>{data.genres[0]}</Title>
    </Card>
  );
};

export default Anime;

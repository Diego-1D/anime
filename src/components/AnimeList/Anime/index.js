import React from "react";
import { Card, CardImage, Title } from "./styles";

//alterei a forma como recebe os parametros do componente pai
//const Anime = ({ id, image, titles }) => {

const Anime = ({ data, }) => {

const {idanime} = data;

  //então inseri os dados nos componentes, puxando a partir de 'data'

  return (
    //observa que aqui, qdo puxo o title, eu puxo tbm do atributo que tá dentro dele (tem titulo em ingles e em japones)
    <Card to={`/singleanime/${idanime}`}>
      <CardImage src={data.image} alt={data.id} />
      <Title>{data.titles.en}</Title>
    </Card>
  );
};

export default Anime;

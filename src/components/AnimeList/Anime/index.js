import React from "react";
import { Card, CardImage } from "./styles";

//alterei a forma como recebe os parametros do componente pai
//const Anime = ({ id, image, titles }) => {

const Anime = ({ data }) => {
  //então inseri os dados nos componentes, puxando a partir de 'data'
  console.log("recebi: ", data.titles);

  return (
    //observa que aqui, qdo puxo o title, eu puxo tbm do atributo que tá dentro dele (tem titulo em ingles e em japones)
    <Card>
      <CardImage src={data.image} alt={data.id} />
      <h1>Título: {data.titles.en}</h1>
    </Card>
  );
};

export default Anime;

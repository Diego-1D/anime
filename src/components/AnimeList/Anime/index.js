import React from "react";
import {
    Card,
    CardImage
} from './styles';

const Anime = ({ id, image, title }) => {
    return (
        <Card>
            <CardImage src={image} alt={id} />
           <h1>{title}</h1>
        </Card>
    )
}

export default Anime;
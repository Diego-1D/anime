import React, { useEffect, useState, useCallback } from 'react';
import {
    Container,
    Title,
    FeaturedVertical,
    FeaturedHorizontal,
    Description,
    Info,
    Year,
    Seasons,
    Points
} from './styles';

const url = "https://api.aniapi.com/v1/anime?title=One%20Piece&formats=0,1&status=1&year=1999&season=3&genres=Pirates,War,Cyborg&nsfw=true";

const Hero = () => {

    const [anime, setAnime] = useState([]);

    const fetchAnimes = useCallback(async () => {
        try {
            const response = await fetch(`${url}`);
            const dataAnime = await response.json();
            const { data } = dataAnime;
            const { documents } = data

            if (documents) {
                const newAnime = documents.map((item) => {
                    const { anilist_id, banner_image, titles, cover_image,score, descriptions, season_period, season_year} = item;
                    console.log('Banner: ', banner_image)
                    console.log('Image: ', cover_image)
                    return {
                        id: anilist_id,
                        titles: titles,
                        image: banner_image,
                        cover: cover_image,
                        score:score,
                        descriptions: descriptions,
                        seasons: season_period,
                        year: season_year,
                    }
                })
                setAnime(newAnime);
            }

        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchAnimes();
    }, [fetchAnimes]);

    return (
        <>
            {
                anime.map((item) => {
                    return (
                        <Container style={{ backgroundImage: `url(${item.image})` }}>
                            <FeaturedVertical>
                                <FeaturedHorizontal>
                                    <Title>{item.titles.en}</Title>
                                    <Description>{item.descriptions.it}</Description>
                                    <Info>
                                        <Points>{item.score} Pontos</Points>
                                        <Year>{item.year}</Year>
                                        <Seasons>{item.seasons} Temporadas</Seasons>
                                    </Info>
                                </FeaturedHorizontal>
                            </FeaturedVertical>
                        </Container>
                    )
                })
            }
        </>
    )
}

export default Hero;
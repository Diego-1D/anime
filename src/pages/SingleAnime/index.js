import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const url = 'https://api.aniapi.com/v1/anime/';

const SingleAnime = () => {
    const { idanime } = useParams();

    const [anime, setAnime] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        async function getAnime() {
            try {
                const response = await fetch(`${url}${idanime}`);
                const data = await response.json();

                if (data.data) {
                    const {
                        anilist_id: idcodigo,
                        season_year: year,
                        titles: title,
                        trailer_url: video,
                    } = data.data;
                    const {
                        en:name
                    } = title;
                    const newAnime = {
                        idcodigo,
                        year,
                        title,
                        name,
                        video
                    }
                    setAnime(newAnime);
                } else {
                    setAnime([])
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getAnime();
    }, [idanime]);

    if (loading) {
        return<Loading/>
    }

    const {
        idcodigo,
        year,
        name,
        video,
    } = anime;

    return (
        <section>
            <h1>{idcodigo}</h1>
            <h1>{year}</h1>
            <h1>{name}</h1>
            <video>{video}</video>
        </section>
    )
}

export default SingleAnime;
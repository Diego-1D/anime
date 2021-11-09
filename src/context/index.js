import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://api.aniapi.com/v1/anime?title=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
<<<<<<< HEAD
  const [serchAnime, setSearchAnime] = useState('a');

  const fetchAnimes = useCallback(async () => {
    try {
      const response = await fetch(`${url}${serchAnime}`);
=======
  const [titleAnime, setTitleAnime] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const fetchAnimes = useCallback(async () => {
    try {
      const response = await fetch(`${url}`);
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
      const dataAnime = await response.json();
      const { data } = dataAnime;
      const { documents } = data;

      if (documents) {
        const newAnimes = documents.map((item) => {
          //pra funcionar como tu precisava, faltava tu puxar o 'titles' de dentro do item tbm

          //const { anilist_id, cover_image } = item;
<<<<<<< HEAD
          const { anilist_id, cover_image, titles, genres } = item;
=======
          const { anilist_id, cover_image, titles } = item;
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
          return {
            id: anilist_id,
            image: cover_image,
            //então inseria aqui
            titles: titles,
<<<<<<< HEAD
            genres: genres,
          };
        });
=======
          };
        });
        console.log("animes::", newAnimes);
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
        setAnimes(newAnimes);
      }
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
  }, [serchAnime]);

  useEffect(() => {
    fetchAnimes();
  }, [serchAnime,fetchAnimes]);
=======
  }, []);

  useEffect(() => {
    fetchAnimes();
  }, [fetchAnimes]);
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3

  return (
    <AppContext.Provider
      value={{
        animes,
<<<<<<< HEAD
        setSearchAnime
=======
>>>>>>> 3f4029c136b8475a16963affdb77da645bb90ef3
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
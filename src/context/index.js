import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://api.aniapi.com/v1/anime?title=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
  const [serchAnime, setSearchAnime] = useState('a');

  const fetchAnimes = useCallback(async () => {
    try {
      const response = await fetch(`${url}${serchAnime}`);
      const dataAnime = await response.json();
      const { data } = dataAnime;
      const { documents } = data;

      if (documents) {
        const newAnimes = documents.map((item) => {
          //pra funcionar como tu precisava, faltava tu puxar o 'titles' de dentro do item tbm

          //const { anilist_id, cover_image } = item;
          const { anilist_id, cover_image, titles, genres } = item;
          return {
            id: anilist_id,
            image: cover_image,
            //então inseria aqui
            titles: titles,
            genres: genres,
          };
        });
        setAnimes(newAnimes);
      }
    } catch (error) {
      console.log(error);
    }
  }, [serchAnime]);

  useEffect(() => {
    fetchAnimes();
  }, [serchAnime,fetchAnimes]);

  return (
    <AppContext.Provider
      value={{
        animes,
        setSearchAnime
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
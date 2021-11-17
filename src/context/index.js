import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://api.aniapi.com/v1/anime?title=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
  const [serchAnime, setSearchAnime] = useState('a');
  const [loading, setLoading] = useState(true);

  const fetchAnimes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${serchAnime}`);
      const dataAnime = await response.json();
      const { data } = dataAnime;
      const { documents } = data;
      
      if (documents) {
        const newAnimes = documents.map((item) => {
          
          const { anilist_id, cover_image, titles, id, genres } = item;
          return {
            id: anilist_id,
            image: cover_image,
            titles: titles,
            idanime:id,
            genres: genres,
          };
        });
        setAnimes(newAnimes);
      }else{
        setAnimes([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [serchAnime]);

  useEffect(() => {
    fetchAnimes();
  }, [serchAnime,fetchAnimes]);

  return (
    <AppContext.Provider
      value={{
        animes,
        setSearchAnime,
        loading
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
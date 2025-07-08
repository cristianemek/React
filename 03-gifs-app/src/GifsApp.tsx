import { CustomHeader } from "./components/CustomHeader";
import { CustomSearch } from "./components/CustomSearch";
import { GifList } from "./gifs/components/GifList";
import { GifsPreviousSearches } from "./gifs/components/GifsPreviousSearches";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifs= await getGifsByQuery(term);
    setGifs(gifs);
  };

  
  const handleSearch = async (query: string) => {
    const cleanText = query.trim().toLowerCase();

    if (cleanText.length === 0 || previousTerms.includes(cleanText)) return;

    setPreviousTerms([cleanText, ...previousTerms.splice(0, 3)]);

    const gifs= await getGifsByQuery(query);
    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <CustomSearch placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Busquedas previas */}
      <GifsPreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};

import { CustomHeader } from "./components/CustomHeader";
import { CustomSearch } from "./components/CustomSearch";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock/gifs.mock";
import { GifsPreviousSearches } from "./gifs/components/GifsPreviousSearches";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["goku"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    const cleanText = query.trim().toLowerCase();

    if (cleanText.length === 0 || previousTerms.includes(cleanText)) return;

    setPreviousTerms([
      cleanText,
      ...previousTerms.splice(0,3)
    ])

  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <CustomSearch
        placeholder="Busca lo que quieras"
        onQuery={handleSearch}
      />

      {/* Busquedas previas */}
      <GifsPreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};

import { CustomHeader } from "./components/CustomHeader";
import { CustomSearch } from "./components/CustomSearch";
import { GifList } from "./gifs/components/GifList";
import { GifsPreviousSearches } from "./gifs/components/GifsPreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

  const {handleSearch, previousTerms,handleTermClicked,gifs } = useGifs();
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

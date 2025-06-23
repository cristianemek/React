import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

   const{data, hasError, isLoading}= useFetch('https://pokeapi.co/api/v2/pokemon/1');





  return (
    <div>
        <h1>Información de Pokemón</h1>
        <hr />

        {isLoading && <p>Cargando...</p>}
        {hasError && <p>Error al cargar la data</p>}

        <pre>{data?.name}</pre>
    </div>
  )
}

import type { PokemonData } from "../types/pokemon.types"

export const PokemonCard = ({ id, name, sprites }: PokemonData) => {

    return (
        <section style={{ height: 200 }} className='card'>
            <h2 className="text-capitalize">#{id} - {name}</h2>
            {/* imagenes */}

            <div>
                {
                   sprites?.map(sprite => (
                        <img 
                        key={sprite}
                        src={sprite} 
                        alt={name} />
                   ))
                }
            </div>
        </section>
    )
}

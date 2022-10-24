import IPokemon from '../../interfaces/IPokemon';
import { useState, useEffect } from 'react';
import PokemonItem from './PokemonItem';
import PokemonModule from '../../modules/PokemonModule';

const PokemonList = () => {
    
    const [pokemonArray, setPokemons] = useState<IPokemon[] | null>(null);

    useEffect(() => {
        setPokemonsFromModule();
    }, []);

    const setPokemonsFromModule = () => {
        setPokemons(PokemonModule.getAll());
    }

    const getPokemonItems = () => {
        return pokemonArray?.map((pokemon, index) => 
            <PokemonItem
                key={`pokemon-${index}`}
                id={pokemon.id}
                img={pokemon.img}
                name={pokemon.name}
                type={pokemon.type}
                level={pokemon.level}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                specialAttack={pokemon.specialAttack}
                specialDefense={pokemon.specialDefense}
                speed={pokemon.speed}
            />
        );
    }

    return (
        <section>
            <h1>Pokemon List</h1>
            <section>{getPokemonItems()}</section>
        </section>
    )
}

export default PokemonList;
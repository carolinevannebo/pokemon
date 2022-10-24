import IPokemon from "../interfaces/IPokemon";

const PokemonModule = (
    () => {

        const pokemonArray: IPokemon[] = [
            {
                id: 1,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
                name: "Bulbasaur",
                type: ["Grass", "Poison"],
                level: 1,
                hp: 45,
                attack: 49,
                defense: 49,
                specialAttack: 65,
                specialDefense: 65,
                speed: 45
            },
            {
                id: 2,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png",
                name: "Dragonite",
                type: ["Dragon", "Flying"],
                level: 1,
                hp: 91,
                attack: 134,
                defense: 95,
                specialAttack: 100,
                specialDefense: 100,
                speed: 80
            },
            {
                id: 3,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
                name: "Charizard",
                type: ["Fire", "Flying"],
                level: 1,
                hp: 78,
                attack: 84,
                defense: 78,
                specialAttack: 109,
                specialDefense: 85,
                speed: 100
            },
            {
                id: 4,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
                name: "Pikachu",
                type: ["Electric"],
                level: 1,
                hp: 35,
                attack: 55,
                defense: 40,
                specialAttack: 50,
                specialDefense: 50,
                speed: 90
            },
            {
                id: 5,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png",
                name: "Mew",
                type: ["Psychic"],
                level: 1,
                hp: 100,
                attack: 100,
                defense: 100,
                specialAttack: 100,
                specialDefense: 100,
                speed: 100
            },
            {
                id: 6,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
                name: "Charmander",
                type: ["Fire"],
                level: 1,
                hp: 39,
                attack: 52,
                defense: 43,
                specialAttack: 60,
                specialDefense: 50,
                speed: 65
            },
            {
                id: 7,
                img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
                name: "Squirtle",
                type: ["Water"],
                level: 1,
                hp: 44,
                attack: 48,
                defense: 65,
                specialAttack: 50,
                specialDefense: 64,
                speed: 43
            }
        ];

        const getAll = () :IPokemon[] => pokemonArray; //:IPokemon[] betyr at den skal returnere en array av IPokemon

        const getPokemonById = (id: number) :IPokemon => { // id: number | false | null | NaN | undefined osv betyr at den kan ta flere typer, i dette tilfellet kan den ta både number og false, false vil bli brukt for feilmeldinger ol. spesielt for typescript
            const selectedPokemon = pokemonArray.find
            (pokemon => pokemon.id === id); //find() er en funksjon som finner det første elementet i en array som oppfyller en gitt betingelse
            
            return selectedPokemon as IPokemon; // as IPokemon betyr at den skal returneres som IPokemon, heter type casting ifølge Rolando, AI definerte det som type assertion??
        }

        return { 
            getAll,
            getPokemonById
        }
    }
)();

export default PokemonModule;
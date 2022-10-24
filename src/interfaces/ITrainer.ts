import IPokemon from './IPokemon';
import IGym from './IGym';
import ICity from './ICity';

interface ITrainer {
    id: number,
    name: string,
    age: number,
    home: ICity,
    level: number,
    pokemons: IPokemon[],
    gym?: IGym[]
}

export default ITrainer;
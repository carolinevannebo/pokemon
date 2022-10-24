import ITrainer from './ITrainer';
import ICity from './ICity';

interface IGym {
    id: number,
    name: string,
    leader: string,
    location: ICity,
    trainers: ITrainer[]
}

export default IGym;
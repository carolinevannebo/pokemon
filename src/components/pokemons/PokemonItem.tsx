import {FC} from 'react';
import IPokemon from '../../interfaces/IPokemon';

const PokemonItem:FC<IPokemon> = ({id, img, name, type, level, hp, attack, defense, specialAttack, specialDefense, speed}) => {
    return (
        <article>
            <img src={img} alt={name}></img>
            <h2>{name} ({id})</h2>
            <p>Type: {type?.map((type) => <span> {type} </span>)}</p>
            <p>Level: {level}</p>
            <p>HP: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Special Attack: {specialAttack}</p>
            <p>Special Defense: {specialDefense}</p>
            <p>Speed: {speed}</p>            
        </article>
    )
}

export default PokemonItem;
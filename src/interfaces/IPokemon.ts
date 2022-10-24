interface IPokemon {
    id: number,
    img?: string,
    name: string,
    type?: string[], //det er lov å lage objekter hvor typen ikke er satt (?) og [] betyr at det er mulig å være av flere typer aka array
    level: number,
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number;
}

export default IPokemon;
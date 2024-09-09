import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  // Función para obtener por páginado cada poke
  async getByPage(page: number, size: number = 40): Promise<Resultado[]> {
    const offset = (page - 1) * size;
    if (offset > 300) return []
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    console.log(resJson);
    return resJson.results;
  }

  // Función para obtener los pokes por ID
  async getById(id: string): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(res);
    return await res.json();
  }

  // async getPokemonFootprint(id: string): Promise<string | null> {
  //   try {
  //     // Realizamos la petición a la PokeAPI para obtener datos del Pokémon
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     const data = await response.json();

  //     // Verificamos si existen sprites y específicamente la huella (si está disponible)
  //     const footprintUrl = data.sprites?.versions?.['generation-v']?.['black-white']?.front_default ?? null;

  //     if (footprintUrl) {
  //       console.log(`Huella del Pokémon ${id}:`, footprintUrl);
  //     } else {
  //       console.log(`No se encontró huella para el Pokémon ${id}.`);
  //     }

  //     return footprintUrl;
  //   } catch (error) {
  //     console.error(`Error al obtener datos del Pokémon con ID ${id}:`, error);
  //     return null;
  //   }
  // }

  getDescripcion() {
    fetch("https://pokeapi.co/api/v2/pokemon")
  }

}

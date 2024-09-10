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

  async getDescripcion(id: string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto ? texto.flavor_text : "No se econtró descripción en español";
  }

}

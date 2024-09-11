import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PokeTarjetaComponent } from '../poke-tarjeta/poke-tarjeta.component';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, PokeTarjetaComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnChanges{

  @Input() data?:Resultado; // Obtener los datos
  @Input() pokemon?: Pokemon;
  id: string = "0";
  descripcion: string = ""; // Variable de tipo string para la descripcion del pokemon
  constructor(private pokemonService: PokemonService) { };

  // Mapeo de colores por tipo
  typeColors: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  };

  ngOnChanges(): void {
    if (this.pokemon) {
      this.pokemonService.getDescripcion(this.pokemon?.id).then(res => {
        this.descripcion = res;
        console.log(res);
      })
    }
  }

  // Funcion para obtener la informacion de los pokemons
  extraerInfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1) // Obtener la longitud de la url del pokemon
      this.pokemonService.getById(this.id);
    }
  }

  // Funcion para obtener el color según el tipo de Pokémon
  getTypeColor(type: string): string {
    return this.typeColors[type] || '#000'; // Si no encuentra el tipo, retorna negro por defecto
  }
}

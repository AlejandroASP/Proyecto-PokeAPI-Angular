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
  descripcion: string = "";
  constructor(private pokemonService: PokemonService) { };

  
  ngOnChanges(): void {
    if (this.pokemon) {
      this.pokemonService.getDescripcion(this.pokemon?.id).then(res => {
        this.descripcion = res;
        console.log(res);
      })
    }
  }

  extraerInfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      this.pokemonService.getById(this.id);
    }
  }
}

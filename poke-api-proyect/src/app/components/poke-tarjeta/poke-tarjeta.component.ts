import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-tarjeta.component.html',
  styleUrl: './poke-tarjeta.component.css'
})
export class PokeTarjetaComponent implements OnChanges{

  constructor(private pokemonService: PokemonService){}
  
  ngOnChanges(): void {
    this.extraerInfo();
  }

  @Input() data?:Resultado; // Obtener los datos
  @Input() seleccionado:boolean = false; // Booleano para seleccionar y deseleccionar el poke
  @Output() clicked = new EventEmitter<string>(); 

  id: string = "0";

  extraerInfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      this.pokemonService.getById(this.id);
    }
  }

}

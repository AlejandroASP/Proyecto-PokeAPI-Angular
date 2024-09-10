import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-foto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-foto.component.html',
  styleUrl: './poke-foto.component.css'
})
export class PokeFotoComponent{
  @Input() pokemon?: Pokemon; // Crear una instancia de tipo pokemon para obtener la foto

}

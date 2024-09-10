import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokeFotoComponent } from '../../components/poke-foto/poke-foto.component';
import { PokeTarjetaComponent } from '../../components/poke-tarjeta/poke-tarjeta.component';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';
import { DetalleComponent } from '../../components/detalle/detalle.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PokeFotoComponent, DetalleComponent, PokeTarjetaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // Generar variable tarjetasElement, que hace referencia al ID asignado con #tarjeta
  @ViewChild('tarjetas') tarjetasElement!:ElementRef; 

  constructor(private pokemonService: PokemonService){}
  listaPokemons:Resultado[] = [];
  pagina: number = 1;
  carga:boolean = false;
  pokeSelected?: Pokemon;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1");
    // alert("¡AVISO! ESTA PÁGINA ESTÁ EN CONSTRUCCIÓN, ¡GRACIAS!")
  }

  async cargarLista(){
    if(this.carga) return; // Si carga está en true no hace nada
    // Si no lo está, cargará los pokemons siguientes
    this.carga = true;
    this.listaPokemons = [...this.listaPokemons, ...await this.pokemonService.getByPage(this.pagina)];
    console.log(this.listaPokemons)
    this.pagina++; // Aumentar el contador de paginado
    this.carga = false;
  }

  onScroll(e:any){
    if(
      Math.round(
        // Si tarjetasElement su altura + scroll es = a la altura total del elemento carga la lista
      this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight){
        this.cargarLista()
      }
  }

  // Función para marcar la tarjeta clickada
  async tarjetaClick(id:string){
    this.pokeSelected = await this.pokemonService.getById(id);
    console.log(id);
  }

}

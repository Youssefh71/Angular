import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{

  
  pokemonUrl = 'https://pokeapi.co/api/v2/berry/?limit=10';

  httpclient: HttpClient = inject(HttpClient);


  pokemons: any[] = [];

  getAllPokemon(): Observable<any> {
    return this.httpclient.get(this.pokemonUrl);
  }

  
  ngOnInit() {
    this.getAllPokemon().subscribe(data => {
      this.pokemons = data.results;  // Stocker les résultats dans la variable pokemons
    });
  }

}



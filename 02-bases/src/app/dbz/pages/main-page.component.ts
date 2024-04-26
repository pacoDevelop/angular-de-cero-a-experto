import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent implements OnInit {


  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character)
  }
  onDeleteCharacterById(id: string) {
    this.dbzService.onDeleteCharacterById(id);
  }

  ngOnInit() { }
}

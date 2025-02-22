import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../components/dragonball/character-add/dragonball-character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}

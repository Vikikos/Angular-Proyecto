import { Component } from '@angular/core';
import { MenuItem } from "../menu-item/menu-item";
import { Observable } from 'rxjs';
import { IPlate } from '../interfaces/i-plate';
import { PlateService } from '../services/plate.service';

import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'menu',
  imports: [MenuItem,AsyncPipe,FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  plates$: Observable<IPlate[]>;
  constructor(private plateService: PlateService) {
    this.plates$ = this.plateService.getplates();
  }
  optionCategorySelect: string = '';
  filterByCategory() {
    this.plates$ = this.plateService.getPlatesByCategory(this.optionCategorySelect);
  }

  deletePlate(idPlate: string) {
    this.plateService.deletePlate(idPlate).subscribe();

    this.plates$ = this.plateService.getplates();
  }

  enabledChange = false;
  changeEnable(plate : IPlate) {
    if(plate.enabled){
      //si es visible
      this.enabledChange = false;
    }else{
      this.enabledChange = true;
    }
    this.plateService.changeEnable(plate.id!, this.enabledChange).subscribe();

    this.plates$ = this.plateService.getplates();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from "../menu-item/menu-item";
import { Observable } from 'rxjs';
import { IPlate } from '../interfaces/i-plate';
import { PlateService } from '../services/plate.service';

import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../interfaces/i-user';
import { AccesibilityButton } from '../accesibility-button/accesibility-button';

@Component({
  selector: 'menu',
  imports: [MenuItem,AsyncPipe,FormsModule,AccesibilityButton],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  userSession : IUser = JSON.parse(localStorage.getItem('userSession')!);
  plates$: Observable<IPlate[]>;
  platesArray! : IPlate[];
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
  changePlate(plate: IPlate) {
    this.plateService.changePlate(plate).subscribe();
  }

  orderPrice(order: number) {
    if(order == 1){
      this.plates$ = this.plateService.orderPriceAsc();
    }else{
      this.plates$ = this.plateService.orderPriceDesc();
    }
  }
}
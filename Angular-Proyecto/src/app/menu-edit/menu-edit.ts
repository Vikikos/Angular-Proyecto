import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlate } from '../interfaces/i-plate';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'menu-edit',
  imports: [FormsModule],
  templateUrl: './menu-edit.html',
  styleUrl: './menu-edit.css',
})
export class MenuEdit {
  @Input() cplate! : IPlate;
  @Output() changedPlate = new EventEmitter<IPlate>();
    changePlate() {
      //mandamos el plato ya modificado al componente gestion
      this.changedPlate.emit(this.cplate);
    }
    changeImage(fileInput: HTMLInputElement) {
        if (!fileInput.files || fileInput.files.length === 0) { return; }
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.addEventListener('loadend', e => {
            this.cplate.image = reader.result as string;
        });
    }
}

import { Component, Input } from '@angular/core';
import { IPlate } from '../interfaces/i-plate';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'menu-edit',
  imports: [FormsModule],
  templateUrl: './menu-edit.html',
  styleUrl: './menu-edit.css',
})
export class MenuEdit {
  @Input() plate! : IPlate;
      changePlate() {
        
    }
    changeImage(fileInput: HTMLInputElement) {
        if (!fileInput.files || fileInput.files.length === 0) { return; }
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.addEventListener('loadend', e => {
            this.plate.image = reader.result as string;
        });
    }
}

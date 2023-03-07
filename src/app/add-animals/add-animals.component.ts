import { Component, EventEmitter, Output } from '@angular/core';

export interface Animal {
  name: string;
  category: 'cat' | 'dog';
}

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.scss'],
})
export class AddAnimalsComponent {
  @Output() addAnimal = new EventEmitter<Animal>();

  animalData: Animal = {
    name: '',
    category: 'cat',
  };

  onSubmit() {
    this.addAnimal.emit(this.animalData);
  }
}

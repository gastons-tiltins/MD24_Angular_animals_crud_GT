import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalsData } from '../app-types';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss'],
})
export class ListAnimalsComponent {
  @Input() animals: AnimalsData[] = [];
  @Output() id = new EventEmitter<string>();

  deleteData(id: string) {
    this.id.emit(id);
  }
}

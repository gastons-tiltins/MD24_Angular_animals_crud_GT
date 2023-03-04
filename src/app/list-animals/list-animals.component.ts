import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalsData } from '../app-types';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss'],
})
export class ListAnimalsComponent {
  @Input() data: AnimalsData[] = [];
  @Output() id = new EventEmitter<number>();

  deleteData(id: number) {
    this.id.emit(id);
  }
}

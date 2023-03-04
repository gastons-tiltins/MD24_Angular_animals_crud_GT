import { Component, Input } from '@angular/core';
import { AnimalsData } from '../app-types';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss'],
})
export class ListAnimalsComponent {
  @Input() data: AnimalsData[] = [];
}

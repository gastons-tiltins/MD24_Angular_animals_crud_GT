import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimalsData } from '../app-types';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-toggle-animals',
  templateUrl: './toggle-animals.component.html',
  styleUrls: ['./toggle-animals.component.scss'],
})
export class ToggleAnimalsComponent {
  @Input() data: AnimalsData[] = [];
  @Output() toggleAnimals = new EventEmitter<AnimalsData>();

  category = true;

  handleToggle() {
    if (this.category) {
      console.log('CAT');
      this.category = false;
    } else {
      console.log('DOG');
      this.category = true;
    }
  }

  isToggleOn = false;

  toggle() {
    this.isToggleOn = !this.isToggleOn;
  }
}

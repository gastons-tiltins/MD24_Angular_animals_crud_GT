import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-animals',
  templateUrl: './toggle-animals.component.html',
  styleUrls: ['./toggle-animals.component.scss'],
})
export class ToggleAnimalsComponent {
  @Input() showOnlyCats: boolean = false;

  @Output()
  changeFilter = new EventEmitter<boolean>();

  handleToggle() {
    this.changeFilter.emit();
  }
}

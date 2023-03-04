import { Component, Input } from '@angular/core';
import { AnimalsData } from './app-types';
import { AnimalsService } from './services/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Animals App';

  animalsData: any = [];

  constructor(private animalsService: AnimalsService) {}

  ngOnInit() {
    this.animalsService.getData().subscribe((response) => {
      console.log(response);
      this.animalsData = response;
    });
  }

  deleteData(id: number) {
    this.animalsService.deleteData(id).subscribe((err) => console.log(err));
    console.log(id);
  }
}

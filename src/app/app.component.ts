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
    const data = this.animalsService.getData().subscribe((response) => {
      console.log(response);
      this.animalsData = response;
    });
  }

  // animalsData: AnimalsData[] = [
  //   {
  //     id: 1,
  //     name: 'name1',
  //     category: 'category1',
  //   },
  //   {
  //     id: 2,
  //     name: 'name2',
  //     category: 'category1',
  //   },
  //   {
  //     id: 3,
  //     name: 'name3',
  //     category: 'category2',
  //   },
  // ];
}

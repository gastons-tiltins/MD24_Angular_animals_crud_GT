import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { AnimalsData } from './app-types';
import { AnimalsService } from './services/animals.service';
import { Animal } from './add-animals/add-animals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Animals App';

  animalsData: AnimalsData[] = [];
  showOnlyCats = false;

  constructor(
    private animalsService: AnimalsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const isCatsOnly = params['catsOnly'] === 'true';

      this.getAllAnimals(isCatsOnly);
      this.showOnlyCats = isCatsOnly;
    });
  }

  getAllAnimals(catsOnly: boolean) {
    this.animalsService.getAnimals(catsOnly).subscribe((response) => {
      this.animalsData = response;
    });
  }

  deleteAnimalRequest(_id: string) {
    this.animalsService.deleteAnimal(_id).subscribe(() => {
      this.animalsData = this.animalsData.filter(
        (animal: AnimalsData) => animal._id !== _id
      );
    });
  }

  addAnimalRequest(animal: Animal) {
    this.animalsService.createAnimal(animal).subscribe({
      next: (response) => {
        this.animalsData.push(response);
      },
      error: (e) => console.error(e),
    });
  }

  catFilterToggle() {
    this.showOnlyCats = !this.showOnlyCats;
    const queryParams = { catsOnly: String(this.showOnlyCats) };
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });

    this.getAllAnimals(this.showOnlyCats);
  }
}

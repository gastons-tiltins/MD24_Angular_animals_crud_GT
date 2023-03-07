export interface AnimalsData {
  _id: string;
  name: string;
  category: string;
}

export class Animal {
  constructor(public name: string, public category: string) {}
}

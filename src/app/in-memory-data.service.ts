import { InMemoryDbService } from './../../node_modules/angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 311, name: 'Mr. Nice'},
      {id: 312, name: 'Narco'},
      {id: 313, name: 'Bombasto'},
      {id: 314, name: 'Celeritas'},
      {id: 315, name: 'Magneta'},
      {id: 316, name: 'RubberMan'},
      {id: 317, name: 'Dynama'},
      {id: 318, name: 'Dr IQ'},
      {id: 319, name: 'Magma'},
      {id: 320, name: 'Tornado'}
    ];
    return {heroes};
  }
}

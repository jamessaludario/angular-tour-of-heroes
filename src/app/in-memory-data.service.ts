import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 21, name: 'Batman '},
      { id: 22, name: 'Superman' },
      { id: 23, name: 'Lastickman' },
      { id: 24, name: 'Bomberman' },
      { id: 25, name: 'Hugh Jackman' },
      { id: 26, name: 'Puto Suman' },
      { id: 27, name: 'Gulaman' },
      { id: 28, name: 'Palaman' },
      { id: 29, name: 'Gidaman' },
      { id: 30, name: 'Gunman' }
    ];
    return {heroes};
  }
}

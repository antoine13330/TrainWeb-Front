import { Chapitre } from 'src/app/_models/Chapitres/Chapitre';
import { fakeExos } from '../Exos/exo';
export const fakeChapitres: Chapitre[] = [
  {
    id: 0,
    name: 'Chapitre 0',
    exos: [fakeExos[0], fakeExos[3], fakeExos[2]],
  },
  {
    id: 1,
    name: 'Chapitre 1',
    exos: [fakeExos[1]],
  },
  {
    id: 2,
    name: 'Chapitre 2',
    exos: [fakeExos[0],  fakeExos[2]],
  },
  {
    id: 3,
    name: 'Chapitre 3',
    exos: [fakeExos[0], fakeExos[1], fakeExos[3]],
  },
];

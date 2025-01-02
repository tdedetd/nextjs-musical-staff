import { Note } from '@/models/note.type';
import { Accidental } from '@/models/accidental.type';

export const majorTonalityAccidentalMapper: Record<Note, Exclude<Accidental, 'natural'>> = {
  'C': 'flat',
  'Cf': 'flat',
  'Cs': 'sharp',
  'D': 'sharp',
  'Df': 'flat',
  'Ds': 'flat',
  'E': 'sharp',
  'Ef': 'flat',
  'Es': 'flat',
  'F': 'flat',
  'Ff': 'sharp',
  'Fs': 'sharp',
  'G': 'sharp',
  'Gf': 'flat',
  'Gs': 'flat',
  'A': 'sharp',
  'Af': 'flat',
  'As': 'flat',
  'B': 'sharp',
  'Bf': 'flat',
  'Bs': 'flat',
};

import { Note } from '@/models/note.type';
import { Accidental } from '@/app/models/accidental.type';

export const minorTonalityAccidentalMapper: Record<Note, Exclude<Accidental, 'natural'>> = {
  'C': 'flat',
  'Cf': 'sharp',
  'Cs': 'sharp',
  'D': 'flat',
  'Df': 'sharp',
  'Ds': 'sharp',
  'E': 'sharp',
  'Ef': 'flat',
  'Es': 'flat',
  'F': 'flat',
  'Ff': 'sharp',
  'Fs': 'sharp',
  'G': 'flat',
  'Gf': 'sharp',
  'Gs': 'sharp',
  'A': 'sharp',
  'Af': 'flat',
  'As': 'sharp',
  'B': 'sharp',
  'Bf': 'sharp',
  'Bs': 'flat',
};

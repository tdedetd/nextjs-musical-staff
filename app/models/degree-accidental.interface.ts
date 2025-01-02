import { NoteLetter } from './note-letter.type';
import { Accidental } from './accidental.type';

export interface DegreeAccidental {
  note: NoteLetter;
  accidental: Accidental;
}

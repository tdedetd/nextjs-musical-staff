import { NoteLetter } from './note-letter.type';
import { Accidental } from './accidental.type';

export interface DegreePitch {
  note: NoteLetter;
  accidental: Accidental;
}

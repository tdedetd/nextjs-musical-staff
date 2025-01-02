import { Bar } from './bar.interface';
import { Clef } from './clef.type';
import { Note } from './note.type';
import { Scale } from './scale.type';

export interface Staff {
  name: string;
  tempo: number;
  scale: Scale;
  tonality: Note;
  clefs?: Clef[];
  bars: Bar[];
}

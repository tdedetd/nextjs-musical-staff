import { IBar } from './bar.interface';
import { Clef } from './clef.type';
import { Note } from './note.type';
import { Scale } from './scale.type';

export interface IStaff {
  name: string;
  tempo: number;
  scale: Scale;
  tonality: Note;
  signature: {
    count: number;
    value: number;
  };
  clefs: Clef[];
  bars: IBar[];
}

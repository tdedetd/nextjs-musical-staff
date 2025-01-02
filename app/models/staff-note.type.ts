import { NoteValues } from './note-values.enum';
import { Note } from './note.type';
import { Octave } from './octave.type';

export type StaffNote = ({ note: null } | { note: Note, octave: Octave }) & {
  value: NoteValues;
  dot?: boolean;
  fermata?: boolean;
  dynamics?: 'crescendo' | 'diminuendo';
};

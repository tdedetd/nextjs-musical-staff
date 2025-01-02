import { StaffNote } from './staff-note.type';

export interface StaffBarClef {
  notes: StaffNote[] |  StaffNote[][];
  dynamics?: 'crescendo' | 'diminuendo';
}

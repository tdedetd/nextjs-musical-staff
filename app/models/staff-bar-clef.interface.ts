import { StaffNote } from './staff-note.type';

export interface IStaffBarClef {
  notes: StaffNote[] |  StaffNote[][];
  dynamics?: 'crescendo' | 'diminuendo';
}

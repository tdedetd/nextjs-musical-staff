import { NoteLetter } from '@/models/note-letter.type';

export function isNoteLetter(value: string): value is NoteLetter {
  return ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(value);
}

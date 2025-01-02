import { NoteLetter } from './note-letter.type';

export type Note = NoteLetter | `${NoteLetter}s` | `${NoteLetter}f`;

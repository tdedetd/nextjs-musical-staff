import { DegreePitch } from '@/app/models/degree-pitch.interface';
import { Note } from '@/models/note.type';
import { Scale } from '@/models/scale.type';
import { majorTonalityAccidentalMapper } from '../constants/major-tonality-accidental-mapper';
import { minorTonalityAccidentalMapper } from '../constants/minor-tonality-accidental-mapper';
import { noteRelationalSemitones } from '../constants/note-relational-semitones';
import { noteLettersCount } from '../constants/note-letters-count';
import { semitonesCount } from '../constants/semitones-count';
import { formulaSemitones } from '../constants/formula-semitones';
import { isNotEmpty } from './typeguards/is-not-empty';
import { isNoteLetter } from './typeguards/is-note-letter';

export function getPitchSignesForTonality(root: Note, scale: Scale): DegreePitch[] {
  const rootSemitones = noteRelationalSemitones.indexOf(
    noteRelationalSemitones.find((notes) => notes.includes(root)) ?? []
  );

  if (rootSemitones === -1) {
    throw new Error('root semitones error');
  }

  const accidental = (
    scale === 'maj' ? majorTonalityAccidentalMapper : minorTonalityAccidentalMapper
  )[root];

  const accidentalSuffix = accidental === 'flat' ? 'f' : 's';

  return formulaSemitones[scale]
    .reduce((acc, semitones) => {
      const last = acc.at(-1) ?? 0;
      return [...acc, last + semitones];
    }, [rootSemitones])
    .slice(0, noteLettersCount)
    .map((semitones) => {
      const semitonesNormalized = semitones % semitonesCount;
      const notes = noteRelationalSemitones[semitonesNormalized];
      return notes.find(note => note.length === 1) ?? notes.find((note) => note[1] === accidentalSuffix);
    })
    .filter(isNotEmpty)
    .filter((note) => note.length !== 1)
    .map((note) => note[0])
    .filter(isNoteLetter)
    .map((note) => ({ note, accidental }));
}

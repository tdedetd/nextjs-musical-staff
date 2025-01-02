import { NoteValues } from '@/models/note-values.enum';
import { Staff } from '@/models/staff.interface';
import { BarTypes } from '@/models/bar-types.enum';

export const piratesOfTheCaribbean: Staff = {
  name: 'Pirates of the Caribbean',
  tempo: 140,
  scale: 'min',
  tonality: 'D',
  signature: {
    count: 3,
    value: 4,
  },
  clefs: ['treble', 'bass'],
  bars: [
    {
      clefs: [
        {
          notes: [
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Quarter,
              dynamics: 'crescendo',
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
          ]
        },
        {
          notes: [
            {
              note: null,
              value: NoteValues.Whole,
            }
          ]
        }
      ],
    },
    {
      clefs: [
        {
          notes: [
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Quarter,
              dynamics: 'crescendo',
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
          ]
        },
        {
          notes: [
            {
              note: null,
              value: NoteValues.Whole,
            }
          ]
        }
      ],
    },
    {
      clefs: [
        {
          notes: [
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Quarter,
              dynamics: 'crescendo',
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
          ]
        },
        {
          notes: [
            {
              note: 'D',
              octave: 3,
              value: NoteValues.Half,
              dot: true,
            },
          ]
        }
      ],
    },
    {
      type: BarTypes.Double,
      clefs: [
        {
          notes: [
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Quarter,
              dynamics: 'crescendo',
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'A',
              octave: 4,
              value: NoteValues.Eighth,
            },
            {
              note: 'C',
              octave: 5,
              value: NoteValues.Eighth,
            },
          ]
        },
        {
          notes: [
            {
              note: 'D',
              octave: 4,
              value: NoteValues.Half,
              dot: true,
            },
          ]
        }
      ],
    },
  ],
};

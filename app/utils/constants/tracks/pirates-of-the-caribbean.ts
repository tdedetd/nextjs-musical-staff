import { NoteValues } from '@/models/note-values.enum';
import { IStaff } from '@/models/staff.interface';
import { BarTypes } from '@/models/bar-types.enum';

export const piratesOfTheCaribbean: IStaff = {
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
    // bar 1
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
    // bar 2
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
    // bar 3
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
    // bar 4
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
    // no 5
    {
      clefs: [
        {
          notes: [
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Quarter,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Quarter,
            },
            {
              note: 'D',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'E',
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
        },
      ]
    },
    // bar 6
    {
      clefs: [
        {
          notes: [
            {
              note: 'F',
              octave: 5,
              value: NoteValues.Quarter,
            },
            {
              note: 'F',
              octave: 5,
              value: NoteValues.Quarter,
            },
            {
              note: 'F',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'G',
              octave: 5,
              value: NoteValues.Eighth,
            },
          ]
        },
        {
          notes: [
            {
              note: 'Bf',
              octave: 3,
              value: NoteValues.Half,
              dot: true,
            }
          ]
        }
      ],
    },
    // bar 7
    {
      clefs: [
        {
          notes: [
            {
              note: 'E',
              octave: 5,
              value: NoteValues.Quarter,
            },
            {
              note: 'E',
              octave: 5,
              value: NoteValues.Quarter,
            },
            {
              note: 'E',
              octave: 5,
              value: NoteValues.Eighth,
            },
            {
              note: 'G',
              octave: 5,
              value: NoteValues.Eighth,
            },
          ]
        },
        {
          notes: [
            {
              note: 'A',
              octave: 3,
              value: NoteValues.Half,
              dot: true,
            },
          ]
        }
      ]
    }
  ],
};

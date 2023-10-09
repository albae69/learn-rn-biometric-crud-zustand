import {StateCreator} from 'zustand';

// Local files
import {Note} from '@models/Note';

export interface NoteSlice {
  notes: Note[];
  add: (note: Note) => void;
  remove: (id: number) => void;
  edit: (id: number, note: Note) => void;
}

const createNoteSlice: StateCreator<NoteSlice> = set => ({
  notes: [{id: 0, title: 'title 1', description: 'lorem ipsum sit dolor amet'}],
  add: (note: Note) => set(state => ({notes: state.notes.concat(note)})),
  remove: id =>
    set(state => ({notes: state.notes.filter(item => item.id !== id)})),
  edit: (id: number, note: Note) =>
    set(state => ({
      notes: state.notes.map(item => (item.id == note.id ? note : item)),
    })),
});

export default createNoteSlice;

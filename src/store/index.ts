import {create} from 'zustand';

// Local files
import createNoteSlice, {NoteSlice} from './slice/note.slice';

const useBoundStore = create<NoteSlice>()((...a) => ({
  ...createNoteSlice(...a),
}));

export default useBoundStore;

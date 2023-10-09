import {create} from 'zustand';
import {persist, createJSONStorage, StateStorage} from 'zustand/middleware';

// Local files
import createNoteSlice, {NoteSlice} from './slice/note.slice';
import {storage} from '@utils';

const customStorage: StateStorage = {
  getItem: function (name: string): string {
    return storage.getString(name)!;
  },
  setItem: function (name: string, value: string): void | Promise<void> {
    storage.set(name, value);
  },
  removeItem: function (name: string): void | Promise<void> {
    storage.delete(name);
  },
};

const useBoundStore = create<NoteSlice>()(
  persist(
    (...a) => ({
      ...createNoteSlice(...a),
    }),
    {
      name: 'storage',
      storage: createJSONStorage(() => customStorage),
      onRehydrateStorage: state => {
        console.log('hydration starts');
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error);
          } else {
            console.log('hydration finished', state);
          }
        };
      },
    },
  ),
);

export default useBoundStore;

import * as z from 'zod';

export const NoteSchema = z.object({
  id: z.coerce.number(),
  title: z.string().min(4, 'title length minimal is 4 character'),
  description: z.string().min(4, 'description length minimal is 4 character'),
});

export type Note = z.infer<typeof NoteSchema>;

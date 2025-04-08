import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(3, 'Le titre est trop court'),
  description: z.string().min(10, 'La description est trop courte'),
  image: z.string().url('L’URL de l’image est invalide').optional().or(z.literal('')),
  content: z.string().min(10, 'Le contenu est trop court'),
});

export type Post = z.infer<typeof postSchema>;
'use server';

import prisma from '@/lib/prisma';
import { postSchema } from '@/lib/schema';
import { revalidatePath } from 'next/cache';


export async function getPostById(id: string) {
    return await prisma.post.findUnique({ where: { id } });
}

export async function getPosts() {
    return await prisma.post.findMany();
}

export async function deletePost(id: string) {
    await prisma.post.delete({ where: { id } });
    revalidatePath('/');
}


export async function updatePost(formData: FormData) {
  const rawData = {
    id: formData.get('id'),
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    content: formData.get('content'),
  };

  const parsed = postSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      error: 'Erreur de validation',
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  const { title, description, image, content } = parsed.data;

  const id = rawData.id as string;

  await prisma.post.update({
    where: { id },
    data: { title, description, image, content },
  });

  revalidatePath('/');

  return { success: true };
}



export async function createPost( formData: FormData) {
  const rawData = {
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image') as string,
    content: formData.get('content'),
  };

  const parsed = postSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      error: 'Erreur de validation',
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  const { title, description, image, content } = parsed.data;

  await prisma.post.create({
    data: { title, description, image: image ?? '', content },
  });

  revalidatePath('/');

  return { success: true };
}

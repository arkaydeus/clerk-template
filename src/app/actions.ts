'use server'
import { currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { db } from '../db'
import { UserMessages } from '../db/schema'
export async function createUserMessage(formData: FormData) {
  const user = await currentUser()

  if (!user) throw new Error('User not found')
  const message = formData.get('message') as string
  await db.insert(UserMessages).values({
    user_id: user.id,
    message,
  })
  redirect('/')
}
export async function deleteUserMessage() {
  const user = await currentUser()
  if (!user) throw new Error('User not found')
  await db.delete(UserMessages).where(eq(UserMessages.user_id, user.id))
  redirect('/')
}

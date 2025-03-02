import { currentUser } from '@clerk/nextjs/server'
import { db } from '../db'
import { createUserMessage, deleteUserMessage } from './actions'
async function getUserMessage() {
  const user = await currentUser()
  if (!user) throw new Error('User not found')
  return db.query.UserMessages.findFirst({
    where: (messages, { eq }) => eq(messages.user_id, user.id),
  })
}
export default async function Home() {
  const existingMessage = await getUserMessage()
  const ui = existingMessage ? (
    <div className='w-2/3 text-center'>
      <h1 className='text-3xl'>{existingMessage.message}</h1>
      <form
        action={deleteUserMessage}
        className='mb-4 w-full rounded px-8 pt-6 pb-8'
      >
        <div className='w-full text-center'>
          <input
            type='submit'
            value={'Delete Quote'}
            className='cursor-pointer rounded bg-[#00E699] px-4 py-2 font-semibold text-gray-800 transition-colors hover:bg-[#00e5BF] focus:outline-none'
          />
        </div>
      </form>
    </div>
  ) : (
    <form action={createUserMessage} className='w-2/3 rounded px-8 shadow-md'>
      <div className='mb-6'>
        <input
          type='text'
          name='message'
          placeholder='Mistakes are the portals of discovery - James Joyce'
          className='w-full appearance-none rounded border p-3 text-center leading-tight text-gray-700 focus:outline-none'
        />
      </div>
      <div className='w-full text-center'>
        <input
          type='submit'
          value={'Save Message'}
          className='cursor-pointer rounded bg-[#00E699] px-4 py-2 font-semibold text-gray-800 transition-colors hover:bg-[#00e5BF] focus:outline-none'
        />
      </div>
    </form>
  )
  return (
    <main className='align-center -mt-16 flex min-h-screen flex-col items-center justify-center px-24'>
      <h2 className='pb-6 text-2xl text-gray-400'>
        {existingMessage
          ? 'Your quote is wonderful...'
          : 'Save an inspiring quote for yourself...'}
      </h2>
      {ui}
    </main>
  )
}

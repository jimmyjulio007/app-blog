import { Toggle } from '@/components/toggle'
import { Package } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className='w-full flex justify-evenly py-8 px-auto border-b-[1px] border-accent-foreground'>
        <p className='text-2xl font-bold uppercase'>Blog App</p>
        <div className='flex items-center gap-4'>
            <Link href={'/'} className='uppercase flex items-center gap-2 text-lg font-semibold'>
            Blog <Package />
            </Link>
            <Toggle />
        </div>
    </div>
  )
}

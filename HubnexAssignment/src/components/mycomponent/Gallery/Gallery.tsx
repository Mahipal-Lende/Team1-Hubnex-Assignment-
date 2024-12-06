import { MagicCard } from '@/components/ui/magic-card';
import React from 'react'

const Gallery:React.FC = () => {
  return (
    <div className='max-h-[200px] max-w-[500px] bg-purple-500'>
      <MagicCard className='bg-slate-700'></MagicCard>
    </div>
  )
}

export default Gallery;

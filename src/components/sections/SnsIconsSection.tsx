import Image from 'next/image'
import { snsIcons } from '@/constants/snsIcons'

export const SnsIconsSection = () => {
  return (
    <div className="relative mb-16">
      <div className="absolute -z-10 left-0 bottom-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl"></div>
      <div className="flex justify-center gap-16">
        {snsIcons.map(({ id, icon, width, height }) => (
          <div key={id} className="flex flex-col items-center gap-3 p-4 rounded-lg">
            <Image 
              src={`/images/${icon}`} 
              alt={id} 
              width={width} 
              height={height} 
              className="object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  )
} 
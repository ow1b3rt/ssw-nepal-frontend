import Image from 'next/image'

export function ImageContainer({ className, ...props }) {
    return (
        <div className={className + ' overflow-hidden relative'}>
            <Image className='hover:scale-105 transition-transform duration-300' fill {...props} />
        </div>
    )
}
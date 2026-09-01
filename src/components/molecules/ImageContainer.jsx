import Image from 'next/image'

export function ImageContainer({ className, ...props }) {
    return (
      <div className={className + " overflow-hidden rounded-2xl relative"}>
        <Image
          className="hover:scale-105 transition ease-in-out duration-500"
          fill
          {...props}
        />
      </div>
    );
}
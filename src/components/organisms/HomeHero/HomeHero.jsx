import { HeroText } from './HeroText'
import { HeroGallery } from './HeroGallery'

export function HomeHero() {
    return (
        <section className='flex justify-between w-full items-center'>
            <HeroText />
            <HeroGallery />
        </section>
    )
}
import { HeroText } from './HeroText'
import { HeroGallery } from './HeroGallery'

export function HomeHero() {
    return (
        <section className='flex flex-col md:flex-row gap-8 justify-between w-full items-center'>
            <HeroText />
            <HeroGallery />
        </section>
    )
}
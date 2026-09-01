import { ServicesGrid } from "./HomeServicesGrid";
import { ServicesIntro } from "./HomeServicesIntro";

export function HomeServices() {
    return (
        <section className='flex flex-col md:flex-row gap-8 justify-between w-full items-center'>
            <ServicesIntro />
            <ServicesGrid />
        </section>
    )
}
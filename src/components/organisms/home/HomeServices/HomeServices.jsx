import { ServicesGrid } from "./HomeServicesGrid";
import { ServicesIntro } from "./HomeServicesIntro";

export function HomeServices() {
    return (
        <section className='grid lg:grid-cols-2 gap-8'>
            <ServicesIntro />
            <ServicesGrid />
        </section>
    )
}
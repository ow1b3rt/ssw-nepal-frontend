import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";

import Link from "next/link";


export default function Navbar() {
    return (
        <header className="m-[29px] flex items-center gap-6">
            <Image
                src="/ssw.png"
                alt="SSW logo"
                width={170}
                height={85}
                priority
                className="h-auto w-[170px] mx-[20px]"
            />
            <nav className="flex h-[60px] flex-1 mx-[30px] items-center rounded-[32px] bg-white p-[40px] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <ul className="flex w-full items-center justify-between text-[20pt] font-semibold text-black [&_a]:transition-colors [&_a]:hover:text-[#D41920]">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/about" className="flex items-center gap-2">
                            About Us
                            <ChevronDown className="size-5 stroke-[2.5]" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/language"
                            className="flex items-center gap-2"
                        >
                            Language
                            <ChevronDown className="size-5 stroke-[2.5]" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/training"
                            className="flex items-center gap-2"
                        >
                            Training
                            <ChevronDown className="size-5 stroke-[2.5]" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/services"
                            className="flex items-center gap-2"
                        >
                            Services
                            <ChevronDown className="size-5 stroke-[2.5]" />
                        </Link>
                    </li>

                    <li>
                        <Link href="/blogs">Blogs</Link>
                    </li>

                    <li>
                        <Link
                            href="/others"
                            className="flex items-center gap-2"
                        >
                            Others
                            <ChevronDown className="size-5 stroke-[2.5]" />
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className="flex h-[80px] mx-[20px] items-center gap-3 rounded-full bg-[#D41920] px-[20px] text-[20pt] font-semibold text-white">
                <Phone className="size-6" />
                01-5921567
            </button>
        </header>
    );
}

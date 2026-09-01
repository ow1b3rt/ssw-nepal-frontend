import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between gap-4 px-5 py-4 md:gap-6">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/ssw.png"
          alt="SSW logo"
          width={150}
          height={75}
          priority
          className="h-auto w-[105px] sm:w-[125px] md:w-[145px]"
        />
      </Link>

      {/* Navigation */}
      <nav className="min-w-0 hidden md:flex">
        <div className="flex h-[52px] items-center rounded-full bg-white px-4 shadow-[0_4px_18px_rgba(0,0,0,0.12)] sm:h-[56px] sm:px-5 md:h-[58px] md:px-6">
          <ul className="flex text-lg xl:text-xl w-full items-center font-semibold text-black gap-8 [&_a]:transition-colors [&_a]:hover:text-primary-red">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about" className="flex items-center gap-1">
                About Us
                <ChevronDown className="size-3.5 stroke-[2.5]" />
              </Link>
            </li>

            <li>
              <Link href="/language" className="flex items-center gap-1">
                Language
                <ChevronDown className="size-3.5 stroke-[2.5]" />
              </Link>
            </li>

            <li>
              <Link href="/training" className="flex items-center gap-1">
                Training
                <ChevronDown className="size-3.5 stroke-[2.5]" />
              </Link>
            </li>

            <li>
              <Link href="/services" className="flex items-center gap-1">
                Services
                <ChevronDown className="size-3.5 stroke-[2.5]" />
              </Link>
            </li>

            <li>
              <Link href="/blogs">Blogs</Link>
            </li>

            <li>
              <Link href="/others" className="flex items-center gap-1">
                Others
                <ChevronDown className="size-3.5 stroke-[2.5]" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Phone Button */}
      <button className="flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#D41920] px-4 text-xs font-semibold text-white sm:h-[52px] sm:px-5 sm:text-sm md:h-[56px]">
        <Phone className="size-4 sm:size-5" />

        <span>01-5921567</span>
      </button>
    </header>
  );
}

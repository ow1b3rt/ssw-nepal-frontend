"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes/routes";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const NAV_CONFIG = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      {
        href: ROUTES.ABOUT_US.WHY_CHOOSE_US,
        label: "Why Choose Us",
      },
      {
        href: ROUTES.ABOUT_US.MESSAGE_FROM_CHAIRMAN,
        label: "Message from Chairman",
      },
      {
        href: ROUTES.ABOUT_US.SUCCESS_STORY,
        label: "Success Stories",
      },
    ],
  },
  {
    href: "/languages",
    label: "Language",
    children: [{ href: "/language", label: "Courses" }],
  },
  {
    href: "/training",
    label: "Training",
    children: [{ href: "/training", label: "Programs" }],
  },
  {
    href: "/services",
    label: "Services",
    children: [{ href: "/services", label: "All Services" }],
  },
  {
    href: "/blogs",
    label: "Blogs",
    hideBetweenLgAndXl: true,
    injectInto: "/others",
  },
  {
    href: "/others",
    label: "Others",
    children: [
      {
        href: "/others/option-1",
        label: "Option 1",
      },
      {
        href: "/others/option-2",
        label: "Option 2",
      },
    ],
  },
  {
    href: "/contact",
    label: "Contact Us",
    hideBetweenLgAndXl: true,
    injectInto: "/others",
  },
];

const PHONE_NUMBER = "01-5921567";

function isPathActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function DropdownItem({ item, extraChildren }) {
  const [open, setOpen] = useState(false);

  const closeTimer = useRef(null);
  const containerRef = useRef(null);

  const pathname = usePathname();
  const children = extraChildren ? [...extraChildren, ...(item.children || [])] : item.children;

  const isParentActive =
    isPathActive(pathname, item.href) ||
    item.children?.some((child) => isPathActive(pathname, child.href));

  const openNow = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setOpen(true);
  };

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  useEffect(() => {
    function onClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  /*
   * Normal navigation item without dropdown
   */
  if (!children || children.length === 0) {
    const isActive = isPathActive(pathname, item.href);

    return (
      <li>
        <Link
          href={item.href}
          className={`flex items-center gap-1 whitespace-nowrap transition-colors ${
            isActive ? "text-primary-red" : "hover:text-primary-red"
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  /*
   * Navigation item with dropdown
   */
  return (
    <li ref={containerRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-1 whitespace-nowrap transition-colors ${
          isParentActive ? "text-primary-red" : "hover:text-primary-red"
        }`}
      >
        {item.label}

        <ChevronDown
          className={`size-3.5 stroke-[2.5] transition-transform duration-200 xl:size-6 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-3">
          <ul className="flex w-48 flex-col gap-0.5 rounded-xl bg-white p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            {children.map((child) => {
              const isChildActive = isPathActive(pathname, child.href);

              return (
                <li key={child.href} className={child.hideAtXl ? "xl:hidden" : undefined}>
                  <Link
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className={`hover:bg-faint-red hover:text-primary-red block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      isChildActive ? "bg-faint-red text-primary-red font-semibold" : "text-black"
                    }`}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="container mx-auto flex w-full items-center justify-between gap-4 px-5 py-2 md:gap-6 lg:px-4 xl:px-0">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/logo.png"
          alt="SSW logo"
          width={150}
          height={75}
          priority
          className="h-auto w-26.25 sm:w-31.25 md:w-36.25"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden min-w-0 lg:flex">
        <div className="flex h-13 items-center rounded-full bg-white px-4 shadow-[0_4px_18px_rgba(0,0,0,0.12)] sm:h-14 sm:px-5 md:h-14.5 md:px-6">
          <ul className="flex w-full items-center gap-6 text-base font-semibold text-black xl:gap-8 xl:text-xl">
            {NAV_CONFIG.map((item) => {
              const isOthers = item.href === "/others";

              /*
               * Find items that should be injected
               * into the Others dropdown.
               */
              const injected = isOthers ? NAV_CONFIG.filter((i) => i.injectInto === item.href) : [];

              const extraChildren = injected.map((i) => ({
                href: i.href,
                label: i.label,
                hideAtXl: true,
              }));

              /*
               * Used only for direct links like:
               * Blogs
               * Contact Us
               */
              const isDirectActive = isPathActive(pathname, item.href);

              return (
                <span key={item.href} className="contents">
                  {item.hideBetweenLgAndXl ? (
                    /*
                     * Blogs / Contact Us
                     *
                     * Hidden between lg and xl.
                     * Visible at xl and above.
                     */
                    <li className="hidden xl:block">
                      <Link
                        href={item.href}
                        className={`whitespace-nowrap transition-colors ${
                          isDirectActive ? "text-primary-red" : "hover:text-primary-red"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <DropdownItem
                      item={item}
                      extraChildren={isOthers ? extraChildren : undefined}
                    />
                  )}
                </span>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Phone + Mobile Menu */}
      <div className="flex items-center justify-end">
        {/* Desktop Phone CTA */}
        <Link
          href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
          className="bg-primary-red hidden h-12 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-semibold text-white sm:h-13 sm:px-5 sm:text-sm md:h-14.5 md:px-6 md:text-base lg:flex lg:text-lg"
        >
          <Phone className="size-4 sm:size-5" />

          <span>{PHONE_NUMBER}</span>
        </Link>

        {/* Mobile Drawer */}
        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerTrigger>
            <button
              type="button"
              aria-label="Open menu"
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </DrawerTrigger>

          <DrawerContent className="fixed right-0 bottom-0 ml-auto flex min-h-full w-full max-w-64 flex-col rounded-none! border-l bg-white p-0 sm:max-w-sm">
            <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>

            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b px-5 py-4">
              <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
                <Image
                  src="/logo.png"
                  alt="SSW logo"
                  width={120}
                  height={60}
                  className="h-auto w-24"
                />
              </Link>

              <DrawerClose>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-full text-black/60 transition-colors hover:bg-black/5 hover:text-black"
                >
                  <X className="size-5" />
                </button>
              </DrawerClose>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 overflow-y-auto px-5 py-2">
              <ul className="flex flex-col divide-y divide-black/8 font-semibold text-black">
                {NAV_CONFIG.map((item) => (
                  <MobileNavRow key={item.href} item={item} onNavigate={() => setOpen(false)} />
                ))}
              </ul>
            </nav>

            {/* Mobile Phone CTA */}
            <div className="border-t px-5 py-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                onClick={() => setOpen(false)}
                className="bg-primary-red flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-white"
              >
                <Phone className="size-4" />

                <span>{PHONE_NUMBER}</span>
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}

function MobileNavRow({ item, onNavigate }) {
  const pathname = usePathname();

  const isDirectActive = isPathActive(pathname, item.href);

  const isChildActive = item.children?.some((child) => isPathActive(pathname, child.href));

  const [expanded, setExpanded] = useState(isDirectActive || isChildActive);

  /*
   * Normal mobile navigation item
   */
  if (!item.children || item.children.length === 0) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`flex items-center justify-between py-4 text-base transition-colors ${
            isDirectActive ? "text-primary-red" : "hover:text-primary-red"
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  /*
   * Mobile dropdown
   */
  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={`flex w-full items-center justify-between py-4 text-base transition-colors ${
          isDirectActive || isChildActive ? "text-primary-red" : "hover:text-primary-red"
        }`}
      >
        {item.label}

        <ChevronDown
          className={`size-4 stroke-[2.5] transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          } ${isDirectActive || isChildActive ? "text-primary-red" : "text-black/40"}`}
        />
      </button>

      {expanded && (
        <ul className="flex flex-col gap-1 pb-3 pl-3">
          {item.children.map((child) => {
            const isSubActive = isPathActive(pathname, child.href);

            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className={`block rounded-lg px-2 py-2 text-sm transition-colors ${
                    isSubActive
                      ? "text-primary-red font-semibold"
                      : "hover:text-primary-red font-medium text-black/70"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Divider from "./ui/divider";

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-[#002b08] via-[#001d06] to-black text-white">
      <div className="mx-auto container px-4 lg:px-0 ">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.15fr_1fr_0.85fr_0.85fr] xl:gap-20 py-8 md:py-14 lg:py-20">
          {/* About */}
          <div>
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height}
              className="mb-8 h-auto w-60 object-contain"
            />

            <h3 className="mb-3 text-[22px] font-bold">{data.about.title}</h3>

            <p className="max-w-97.5 text-[17px] leading-[1.55] text-white/65">
              {data.about.description}
            </p>
          </div>

          {/* Dynamic Columns */}
          {data.columns.map((column) => (
            <div key={column.title} className="xl:pt-3">
              <h3 className="mb-7 text-[22px] font-bold">{column.title}</h3>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[17px] text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="xl:pt-3">
            <h3 className="mb-7 text-[22px] font-bold">{data.contact.title}</h3>

            <div className="space-y-5 text-[17px] text-white/60">
              {data.contact.items.map((item, index) => (
                <ContactItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <Divider backgroundColor="bg-white/30" className="mb-4" />

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-base text-white/65">
              Copyright ©{currentYear}{" "}
              <span className="font-semibold text-white">
                {data.copyright.company}
              </span>{" "}
              Design &amp; Maintained By{" "}
              <span className="font-semibold text-white">
                {data.copyright.maintainedBy}
              </span>
            </p>

            <div className="flex items-center gap-5">
              {data.socials.map((social) => (
                <SocialLink
                  key={social.name}
                  href={social.href}
                  label={social.name}
                >
                  <SocialIcon type={social.type} />
                </SocialLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ item }) {
  const iconMap = {
    location: MapPin,
    phone: Phone,
    email: Mail,
  };

  const Icon = iconMap[item.type];

  const content = (
    <>
      {Icon && <Icon size={21} className="shrink-0" />}
      <span>{item.text}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="flex items-start gap-4 transition-colors hover:text-white"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-4">{content}</div>;
}

function SocialLink({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center text-white/65 transition-all duration-200 hover:-translate-y-1 hover:text-white"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ type }) {
  const icons = {
    facebook: <FacebookIcon />,
    tiktok: <TikTokIcon />,
    instagram: <InstagramIcon />,
    x: <XIcon />,
    whatsapp: <WhatsAppIcon />,
  };

  return icons[type] ?? null;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94a7.83 7.83 0 0 1-6.22 3.22c-1.36.03-2.72-.35-3.88-1.03A7.77 7.77 0 0 1 1.37 17.1c-.02-.5-.03-1 0-1.49a7.72 7.72 0 0 1 8.95-6.85c.02 1.48-.04 2.96-.04 4.44a3.53 3.53 0 0 0-4.51 2.18c-.27.66-.19 1.42.02 2.09.4 1.33 1.68 2.28 3.07 2.15a3.47 3.47 0 0 0 3.18-3.31c.05-5.43.01-10.86.03-16.29Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="29" height="29" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12c0 1.76.46 3.48 1.335 4.996L2 22l5.13-1.346A9.94 9.94 0 0 0 12.004 22C17.52 22 22 17.514 22 12S17.52 2 12.004 2Z" />
    </svg>
  );
}

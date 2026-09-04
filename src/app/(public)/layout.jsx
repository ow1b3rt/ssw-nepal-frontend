import { footerData } from "@/data/footer";

import Footer from "@/components/footer";
import Breadcrumb from "@/components/molecules/BreadCrumb";
import Nav from "@/components/organisms/Navbar/Nav";

export default function PublicLayout({ children }) {
  return (
    <div className="front flex min-h-screen flex-col justify-between">
      <div className="sticky top-0 z-50 backdrop-blur-2xl">
        <Nav />
      </div>
      <main className="container mx-auto mb-16 flex flex-col px-4 xl:px-0">
        <Breadcrumb />

        {children}
      </main>

      <section className="bg-[linear-gradient(0deg,#DF1F26_0%,#2B2422_35.58%)]">
        <Footer data={footerData} />
      </section>
    </div>
  );
}

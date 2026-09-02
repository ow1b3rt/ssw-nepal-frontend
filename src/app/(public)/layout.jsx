import Footer from "@/components/footer";
import Breadcrumb from "@/components/molecules/BreadCrumb";
import Navbar from "@/components/navbar";
import { footerData } from "@/data/footer";

export default function PublicLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between front">
      <div className="sticky top-0 z-50 backdrop-blur-2xl ">
        <Navbar />
      </div>
      <main className="flex flex-col container mx-auto items-center px-4 xl:px-0">
        <div className="">
          <Breadcrumb />
        </div>
        {children}
      </main>

      <section className="bg-[linear-gradient(0deg,#DF1F26_0%,#2B2422_35.58%)]">
        <Footer data={footerData} />
      </section>
    </div>
  );
}

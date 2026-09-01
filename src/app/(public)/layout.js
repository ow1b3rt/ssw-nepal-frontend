import Footer from "@/components/footer";
import Breadcrumb from "@/components/molecules/BreadCrumb";
import Navbar from "@/components/navbar";
import { footerData } from "@/data/footer";

export default function PublicLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between front">
      <Navbar />
      <main className="flex flex-col max-w-[1440px] items-center">
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

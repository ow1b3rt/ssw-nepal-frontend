import Breadcrumb from "@/components/molecules/BreadCrumb";
import Navbar from "@/components/navbar";

export default function PublicLayout({ children }) {
  return (
    <div className=" container mx-auto flex min-h-screen flex-col justify-between front">
      <Navbar />
      <main>
        <div className="px-4 lg:px-0">
          <Breadcrumb />
        </div>
        {children}
      </main>
      {/*
        <section className="bg-[linear-gradient(0deg,#DF1F26_0%,#2B2422_35.58%)]">
          <Footer />
        </section>
        */}
    </div>
  );
}

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import EcoBand from "@/components/EcoBand";
import Facility from "@/components/Facility";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Products from "@/components/Products";
import Quote from "@/components/Quote";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EcoBand />
        <Products />
        <Clients />
        <Portfolio />
        <Facility />
        <Certifications />
        <About />
        <Quote />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}

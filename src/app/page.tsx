// app/page.tsx
import About from "@/app/views/about";
import Container from "@/components/container";
import Header from "@/app/views/header";
import Hero from "@/app/views/hero";
import Overview from "@/app/views/overview";
import Products from "./views/products";
import HowItWorks from "./views/H-I-W";
import Footer from "./views/footer";
import JoinUs from "./views/joinUs";

export default function HomePage() {
  return (
    <div className="relative  bg-[#FAF9F6]">
      <div className="fixed h-[7.5rem] w-full z-50">
        <Header />
      </div>
      <div className=" pt-[5rem] lg:pt-[7.5rem]">
        <Hero />
        <About />
        <Overview />
        <Products />
        <HowItWorks />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}

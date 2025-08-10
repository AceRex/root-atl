// app/page.tsx
import About from "@/app/views/about";
import Hero from "@/app/views/hero";
import Overview from "@/app/views/overview";
import Products from "./views/products";
import HowItWorks from "./views/H-I-W";
import Footer from "./views/footer";
import JoinUs from "./views/joinUs";
import BestSelling from "./views/bestSelling";
import { FAQ } from "./views/faq";

export default function HomePage() {
  return (
    <div className="relative  bg-[#FAF9F6]">
      <div className=" pt-[5rem] lg:pt-[7.5rem]">
        <Hero />
        <About />
        <Overview />
        <Products />
        <HowItWorks />
        <BestSelling />
        <FAQ />
        <JoinUs />
      </div>
    </div>
  );
}

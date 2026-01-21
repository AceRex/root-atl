// app/page.tsx

import Products from "./views/products";
import HowItWorks from "./views/H-I-W";

import JoinUs from "./views/joinUs";
import BestSelling from "./views/bestSelling";
import { FAQ } from "./views/faq";
import Hero from "./views/hero";
import About from "./views/about";
import Overview from "./views/overview";

export default function HomePage() {
  return (
    <div className="relative bg-[#FAF9F6]">
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

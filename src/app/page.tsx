// app/page.tsx
import Container from "@/components/container";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
<div className="relative">
  <div className="fixed h-[7.5rem] w-full bg-white z-50">
    <Header />
  </div>
  <div className="pt-[7.5rem]">
    <Hero />
    {/* Other sections */}
  </div>
</div>

  );
}

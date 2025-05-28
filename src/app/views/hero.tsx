"use client";
import React, { useEffect, useRef, useState } from "react";
import star from "@/assets/star.png";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { ChevronRight } from "lucide-react";
import Rad_berries from "@/assets/products/1bd18ebf8c59505166e682537732b3f9a5c328d5.png";
import snail_gel from "@/assets/products/1e43bbea1408c0182474afbe0857d71393a157e8.png";
import nibbles from "@/assets/products/6e73899109943999fdb25353ac2ada7cceed2a27.png";
import tripleGlow from "@/assets/products/6fb120683067d6148a26d199c5dc058f0a2f5a9e.png";
import glowWash from "@/assets/products/8a083c5511733a9befd8178c5149ac3b5166a71b.png";
import rad_berried from "@/assets/products/043f5d484a21b7849cbc05209f23065eaeaffbf1.png";
import bbl_boost from "@/assets/products/92ddecfe069c1dd8e39b0991d43c31d2c0d02223.png";
import snoozy from "@/assets/products/a067c35e188427fb75002275d9b4d069c9eeb630.png";
import watch from "@/assets/products/ad309a0e85b0eff4af210a9d3816d28ecf1642b7.png";
import zentea from "@/assets/products/be87c2e6258353447c1344b9d49b640327063cd7.png";
import slimTea from "@/assets/products/c5373a3a56d552f4c6f97b640a8297491a10252d.png";
import immunDrop from "@/assets/products/e774ccab1604a35b67b51d40adf5c8b355bca75c.png";
import femme from "@/assets/products/fcec0e9f46b97d750fb3f9bc76de94069aa9e670.png";

const SlideImages: { id: number; image: any }[] = [
  { id: 1, image: Rad_berries },
  { id: 2, image: snail_gel },
  { id: 3, image: nibbles },
  { id: 4, image: tripleGlow },
  { id: 5, image: glowWash },
  { id: 6, image: rad_berried },
  { id: 7, image: bbl_boost },
  { id: 8, image: snoozy },
  { id: 9, image: watch },
  { id: 10, image: zentea },
  { id: 11, image: slimTea },
  { id: 12, image: immunDrop },
  { id: 13, image: femme },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SlideImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SlideImages.length - 1 ? 0 : prev + 1));
  };

  return (
<div className="flex flex-col lg:flex-row w-full min-h-[80dvh]">
  {/* LEFT: Text Content */}
  <div className="bg-[#DED6CD] w-full lg:w-[42%] flex flex-col items-start justify-center gap-4 px-10 py-12 md:p-20">
    <div className="md:bg-white bg-[#7A7874] rounded-xl md:rounded-full py-3 px-1 max-w-[70%] flex flex-row items-center justify-center gap-3">
      <Image
        src={star}
        alt="star"
        className="w-[20px] h-[20px] hidden md:block"
      />
      <p className="text-sm max-md:text-white font-medium">
        100,000+ Happy customers
      </p>
    </div>

    <p className="md:text-7xl text-4xl font-medium md:text-[#221A11] text-[#624B31]">
      <span className="md:text-[#234D35] md:italic">Healing</span> from the
      inside out
    </p>

    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <Button className="bg-[#234D35] flex-grow font-semibold border-0 text-lg text-white py-6">
        Shop now <ChevronRight />
      </Button>
      <Button
        variant="outline"
        className="border-[#4F4840] flex-grow font-semibold bg-transparent text-lg text-[#221A11] py-6"
      >
        Join the ROOT Network
      </Button>
    </div>
  </div>

  {/* RIGHT: Image Slider */}
  <div className="bg-[#285A37] w-full lg:w-[58%] relative overflow-hidden h-[50vh] lg:h-auto">
    {SlideImages.map((item, index) => (
      <div
        key={item.id}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={item.image}
          alt="slide"
          className="w-[300px] lg:w-[400px] object-contain"
        />
      </div>
    ))}

    {/* Dots */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      {SlideImages.map((_, idx) => (
        <div
          key={idx}
          className={`h-2 rounded-full transition-all duration-300 ${
            idx === currentIndex ? "w-6 bg-white" : "w-4 bg-white/50"
          }`}
        ></div>
      ))}
    </div>
  </div>
</div>

  );
}

export default Hero;

import Container from "@/components/container";
import React from "react";

export default function About() {
  return (
    <Container className="my-24 flex flex-col gap-3 items-center">
      <div className="bg-white text-center drop-shadow-xl drop-shadow-[#F3903526] text-lg px-5 py-2 rounded-full font-semibold">
        🌿 About ROOTS ATL
      </div>
      <h3 className="font-semibold text-2xl text-center lg:text-4xl mt-8">
        Join the ROOTS ATL Movement
      </h3>
      <p className="text-base w-[100%] lg:w-[48%] text-center mb-4">
        ROOTS ATL is a health company that supports, educates, and cares for
        people at every stage of their wellness journey.
      </p>
      <div className="w-full lg:w-5xl rounded-xl overflow-hidden">
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/CBxgZxjdJyk?controls=0&modestbranding=1&rel=0&showinfo=0"
            title="ROOTS ATL Intro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  );
}

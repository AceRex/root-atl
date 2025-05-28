import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import React from "react";

function JoinUs() {
  return (
    <div className="my-24 max-w-[90%] mx-auto">
      <Container className="rounded-lg bg-gradient-to-tl from-[#7C7661] to-[#9F967A] flex flex-row justify-evenly">
        <p>Join the ROOTS Network and Start Earning</p>
        <Button title="Join Now">Join Now</Button>
      </Container>
    </div>
  );
}

export default JoinUs;

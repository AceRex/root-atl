import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import Hero from "./trainingHero";
import TrainingCard from "./card";

function Training() {
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10">
        <Card className="w-full py-12 px-4">
          <h2 className="text-3xl font-semibold text-center">Training Vault</h2>
          <div className="flex items-center gap-3 w-[70%] mx-auto mb-6">
            <Input placeholder="Search here" className="h-12" />
          </div>
          <Hero />
          <div className="grid grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <TrainingCard key={index} />
            ))}
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Training;

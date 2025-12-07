import { Button } from "@/components/ui/button";
import React from "react";

function TrainingCard() {
  return (
    <div className="w-full rounded-lg border p-4">
      <div className="w-full h-[300px] bg-red-200 rounded-lg"></div>
      <p className="text-xl font-semibold py-2">How to close a sale in 5 steps</p>
      <p className="text-sm py-2">Learn the art of building trust and urgency</p>
      <Button className="bg-[#B69B64]">Watch now</Button>
    </div>
  );
}

export default TrainingCard;

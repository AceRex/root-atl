import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function Contact() {
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10 py-12">
        <Card className="w-full px-12">
          <h2 className="text-3xl font-semibold text-center">Contact</h2>
          <h2 className="text-lg text-neutral-400 text-center">Telephone</h2>
          <CardContent className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <Input placeholder="1555999888" className="my-2 h-12" disabled />
            </div>
            <div className="flex flex-col gap-1">
              <Input placeholder="1555999888" className="my-2 h-12" disabled />
            </div>
          </CardContent>
          <h2 className="text-lg text-neutral-400 text-center">E-mail</h2>
          <CardContent className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <Input placeholder="1555999888" className="my-2 h-12" disabled />
            </div>
            <div className="flex flex-col gap-1">
              <Input placeholder="1555999888" className="my-2 h-12" disabled />
            </div>
          </CardContent>
          <h2 className="text-lg text-neutral-400 text-center">Address</h2>
          <CardContent className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <Label>Primary Address</Label>
              <Input placeholder="Address 1" className="my-2 h-24" disabled />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Secondary Address</Label>
              <Input placeholder="Address 2" className="my-2 h-24" disabled />
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Contact;

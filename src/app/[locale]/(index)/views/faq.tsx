"use client";
import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const { t } = useTranslation();
  return (
    <Container className="lg:w-[70%] w-full mx-auto">
      <h3 className="text-4xl font-semibold my-12 lg:w-1/3">
        {t("FAQ.heading")}
      </h3>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="lg:w-2/3"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold">
            {t("FAQ.items.0.title")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>{t("FAQ.items.0.content1")}</p>
            <p>{t("FAQ.items.0.content2")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold">
            {t("FAQ.items.1.title")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>{t("FAQ.items.1.content1")}</p>
            <p>{t("FAQ.items.1.content2")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold">
            {t("FAQ.items.2.title")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>{t("FAQ.items.2.content1")}</p>
            <p>{t("FAQ.items.2.content2")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold">
            {t("FAQ.items.3.title")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>{t("FAQ.items.3.content1")}</p>
            <p>{t("FAQ.items.3.content2")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold">
            {t("FAQ.items.4.title")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>{t("FAQ.items.4.content1")}</p>
            <p>{t("FAQ.items.4.content2")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl font-semibold">
            {t("FAQ.items.5.title")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col w-full gap-4">
            <p>{t("FAQ.items.5.content1")}</p>
            <p>{t("FAQ.items.5.content2")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

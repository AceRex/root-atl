"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./container";

function Breadcrumbs() {
  const paths = usePathname();
  const pathArray = paths.split("/").filter((path) => path !== "");
  return (
    <Container>
      <div className="pt-[9rem] py-3">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 text-[#B69B64]">
            Home
          </Link>
          {pathArray.map((path, index) => {
            const isLast = index === pathArray.length - 1;
            return (
              <span key={index}>
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="text-gray-900 capitalize">{path}</span>
                ) : (
                  <Link
                    href={`/${pathArray.slice(0, index + 1).join("/")}`}
                    className="hover:text-gray-900 capitalize"
                  >
                    {path}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </Container>
  );
}

export default Breadcrumbs;

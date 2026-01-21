import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`max-w-[1200px] mx-auto flex gap-6 py-8 px-6 ${className}`}
    >
      {children}
    </section>
  );
}

export default Container;

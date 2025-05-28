import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-full px-10 md:px-28 py-2 ${className}`}>
      {children}
    </section>
  );
}

export default Container;

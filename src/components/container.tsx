import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-full px-12 md:px-20 py-2 ${className}`}>{children}</div>;
}

export default Container;

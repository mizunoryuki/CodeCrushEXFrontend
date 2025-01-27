import React, { ReactNode } from "react";

type TextButtonProps = {
  color?: "blue" | "green" | "yellow" | "orange" | "red";
  children: ReactNode;
};

export const TextButton: React.FC<TextButtonProps> = ({
  color = "ad",
  children,
}) => {
  return <button className={`button button-${color}`}>{children}</button>;
};

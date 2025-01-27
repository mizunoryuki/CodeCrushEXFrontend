import React, { ReactNode } from "react";
import "./TextButton.scss";

type TextButtonProps = {
  color?: "blue" | "green" | "yellow" | "orange" | "red" | "gray";
  children: ReactNode;
};

export const TextButton: React.FC<TextButtonProps> = ({
  color = "gray",
  children,
}) => {
  return <button className={`button button-${color}`}>{children}</button>;
};

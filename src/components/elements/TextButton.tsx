import React, { ReactNode } from "react";
import styles from "./TextButton.module.scss";

type TextButtonProps = {
  color?: "blue" | "green" | "yellow" | "orange" | "red" | "gray";
  children: ReactNode;
  onClick?: () => void;
};

export const TextButton: React.FC<TextButtonProps> = ({
  color = "gray",
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${color}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

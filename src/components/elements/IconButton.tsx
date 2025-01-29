import React from "react";
import styles from "./IconButton.module.scss";
import Image from "next/image";

type IconButtonProps = {
  color?: "orange" | "gray" | "white";
  url: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  color = "gray",
  url,
}) => {
  return (
    <button className={`${styles.button} ${styles[`button-${color}`]}`}>
      <Image src={url} alt="icon" width={24} height={24} />
    </button>
  );
};

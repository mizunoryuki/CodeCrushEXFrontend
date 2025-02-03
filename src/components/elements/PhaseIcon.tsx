import styles from "./PhaseIcon.module.scss";
import Image from "next/image";

interface Props {
  phase: "read" | "delete" | "fix" | "answer";
  isOn: boolean;
}

interface IconProps {
  state: boolean;
}

export const PhaseIcon = ({ phase, isOn }: Props) => {
  return (
    <div
      className={`${styles.phaseBox} ${
        isOn === false
          ? styles.phaseOff
          : phase === "read"
          ? styles.phaseRead
          : phase === "delete"
          ? styles.phaseDelete
          : phase === "fix"
          ? styles.phaseFix
          : phase === "answer"
          ? styles.phaseAnswer
          : ""
      }`}
    >
      {phase === "read" ? <Read state={isOn} /> : null}
      {phase === "delete" ? <Delete state={isOn} /> : null}
      {phase === "fix" ? <Fix state={isOn} /> : null}
      {phase === "answer" ? <Answer state={isOn} /> : null}
    </div>
  );
};

const Read = ({ state }: IconProps) => {
  return state ? (
    <Image
      src="https://api.iconify.design/heroicons:book-open-20-solid.svg?color=%23ffc80b"
      alt="icon"
      width={55}
      height={55}
    />
  ) : (
    <Image
      src="https://api.iconify.design/heroicons:book-open-20-solid.svg?color=%23c7d2db"
      alt="icon"
      width={55}
      height={55}
    />
  );
};

const Delete = ({ state }: IconProps) => {
  return state ? (
    <Image
      src="https://api.iconify.design/material-symbols:ink-eraser-rounded.svg?color=%23e54671"
      alt="icon"
      width={55}
      height={55}
    />
  ) : (
    <Image
      src="https://api.iconify.design/material-symbols:ink-eraser-rounded.svg?color=%23c7d2db"
      alt="icon"
      width={55}
      height={55}
    />
  );
};

const Fix = ({ state }: IconProps) => {
  return state ? (
    <Image
      src="https://api.iconify.design/heroicons:paint-brush-solid.svg?color=%232ada6e"
      alt="icon"
      width={55}
      height={55}
    />
  ) : (
    <Image
      src="https://api.iconify.design/heroicons:paint-brush-solid.svg?color=%23c7d2db"
      alt="icon"
      width={55}
      height={55}
    />
  );
};

const Answer = ({ state }: IconProps) => {
  return state ? (
    <Image
      src="https://api.iconify.design/heroicons:document-check-16-solid.svg?color=%23ff9f40"
      alt="icon"
      width={55}
      height={55}
    />
  ) : (
    <Image
      src="https://api.iconify.design/heroicons:document-check-16-solid.svg?color=%23c7d2db"
      alt="icon"
      width={55}
      height={55}
    />
  );
};

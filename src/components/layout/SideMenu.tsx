import Image from "next/image";
import styles from "./SideMenu.module.scss";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SideMenu = ({ isOpen, setIsOpen }: Props) => {
    return (
        <div>
            {/* 背景の透かすための要素 */}
            {isOpen && <div className={styles.overlay}></div>}

            <div
                className={`${styles.modalOpenElem} ${
                    isOpen ? styles.animatedText : ""
                }`}
            >
                {/* 開けたり閉じたりするボタン */}
                <button
                    className={styles.modalButton}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60%"
                            height="60%"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                        >
                            <path
                                stroke="var(--color-light-blue)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 6L6 18M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60%"
                            height="60%"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="var(--color-light-blue)"
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </button>
                {/* サイドバーのメイン部分 */}
                <div
                    className={styles.modalBox}
                    style={{
                        display: isOpen ? "block" : "none",
                    }}
                >
                    <div className={styles.modalBoxElem}>
                        <Image
                            aria-hidden
                            src="/logo.svg"
                            alt="logo icon"
                            width={220}
                            height={45}
                        />
                        <Link
                            href="/"
                            style={{
                                color: "var(--color-yellow)",
                                fontSize: "24px",
                            }}
                        >
                            タイトルに戻る
                        </Link>
                        <Link
                            href="/"
                            style={{
                                color: "var(--color-red)",
                                fontSize: "24px",
                            }}
                        >
                            ゲームを終了
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

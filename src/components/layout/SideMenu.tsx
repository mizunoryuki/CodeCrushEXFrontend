"use client";
import Image from "next/image";
import styles from "./SideMenu.module.scss";
import Link from "next/link";
import { useAtom } from "jotai";
import { sidebarAtom } from "@/atoms/sidebarStore";

export const SideMenu = () => {
    const [isOpen, setIsOpen] = useAtom(sidebarAtom);
    return (
        <div>
            {/* 背景の透かすための要素 */}
            {isOpen && <div className={styles.overlay}></div>}

            <div
                className={`${styles.modalOpenElem} ${
                    isOpen ? styles.animatedOpen : styles.animatedClose
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
                <div className={styles.modalBox}>
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
                                fontSize: "var(--font-size-20)",
                                fontWeight: "bold",
                            }}
                        >
                            タイトルに戻る
                        </Link>
                        <Link
                            href="/matching"
                            style={{
                                color: "var(--color-red)",
                                fontSize: "var(--font-size-20)",
                                fontWeight: "bold",
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

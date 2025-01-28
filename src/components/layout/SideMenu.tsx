import styles from "./SideMenu.module.scss";
import { Dispatch, SetStateAction } from "react";

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SideMenu = ({ isOpen, setIsOpen }: Props) => {
    return (
        <div
            className={styles.modalOpen}
            style={{
                backgroundColor: isOpen ? "black" : "",
                opacity: isOpen ? "0.4" : "",
            }}
        >
            {/* 要素を右側に配置する */}
            <div
                className={`${styles.modalOpenElem} ${
                    isOpen ? styles.animatedText : ""
                }`}
            >
                <button
                    className={styles.modalButtonClose}
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
                                stroke="#CED7DD"
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
                                fill="#CED7DD"
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </button>
                <div
                    className={styles.modalBox}
                    style={{
                        display: isOpen ? "block" : "none",
                    }}
                >
                    <div className={styles.modalBoxElem}>
                        <h1>ロゴ</h1>
                        <h2>タイトルに戻る</h2>
                        <h2>ゲームを終了</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

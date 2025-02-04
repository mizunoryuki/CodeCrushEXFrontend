"use client";
import { Editor, Monaco } from "@monaco-editor/react";
import { useState } from "react";
import CustomTheme from "../../../styles/theme/codeEditorTheme.json";
import { IconButton } from "@/components/elements/IconButton";
import styles from "./Code.module.scss";
import { questionCode } from "../../../questions/code/question1";
import { documentCode } from "../../../questions/documents/document1";
import { useAtom, useAtomValue } from "jotai";
import { myCodeAtom } from "@/atoms/codeStore";
import ReactMarkdown from "react-markdown";
import { phaseStatusAtom } from "@/atoms/phaseStatusAtom";

export const Code = () => {
    const phase = useAtomValue(phaseStatusAtom);
    const [isOpenDocument, setIsOpenDocument] = useState(false);
    const [code, setCode] = useAtom(myCodeAtom);
    let phaseTextLeft = "自分のコード";
    let phaseTextRight = "仕様書";
    if (phase === "read") {
        phaseTextLeft = "お題のコード";
    } else if (phase === "delete") {
        phaseTextLeft = "相手のコード";
    } else if (phase === "answer") {
        phaseTextRight = "答え";
    }
    const handleChange = (value: string | undefined) => {
        if (value === undefined) return;
        setCode(value);
    };
    const handleOpenDocument = () => {
        console.log("Open document");
        setIsOpenDocument(!isOpenDocument);
    };
    const handleRunCode = () => {
        console.log("Run code");
    };

    const handleEditorDidMount = (monaco: Monaco) => {
        monaco.editor.defineTheme("CustomTheme", {
            base: "vs",
            inherit: true,
            ...CustomTheme,
        });
    };
    return (
        <div className={styles.codeBoxAll}>
            <div
                className={styles.codeBox}
                style={{
                    width: isOpenDocument ? "50%" : "100%",
                }}
            >
                <div className={styles.codeHeader}>
                    <p className={styles.text}>{phaseTextLeft}</p>
                    {isOpenDocument === true ? (
                        <></>
                    ) : (
                        <div className={styles.buttons}>
                            <div onClick={handleOpenDocument}>
                                <IconButton
                                    url="https://api.iconify.design/heroicons:document-text.svg?color=%23ffffff"
                                    color="gray"
                                />
                            </div>
                            <div onClick={handleRunCode}>
                                <IconButton
                                    url="https://api.iconify.design/fe:play.svg?color=%23ffffff"
                                    color="orange"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <Editor
                    options={{
                        fontFamily: "Inter, Noto Sans JP",
                        fontSize: 16,
                        fontWeight: "600",
                        readOnly: false, //読み込みの有無を切り替え
                        scrollBeyondLastLine: false,
                        minimap: { enabled: false },
                    }}
                    height="384px"
                    width="100%"
                    defaultLanguage="c"
                    onChange={handleChange}
                    value={code}
                    theme="CustomTheme"
                    beforeMount={handleEditorDidMount}
                />
            </div>
            <div
                className={styles.codeBox}
                style={{
                    display: isOpenDocument ? "" : "none",
                    width: isOpenDocument ? "48.5%" : "",
                    border:
                        phase === "answer"
                            ? "5px solid var(--color-green)"
                            : "5px solid var(--color-gray)",
                }}
            >
                <div className={styles.codeHeader}>
                    <p className={styles.text}>{phaseTextRight}</p>
                    {phase === "answer" ? (
                        <></>
                    ) : (
                        <div className={styles.buttons}>
                            <div onClick={handleOpenDocument}>
                                <IconButton
                                    url="https://api.iconify.design/heroicons:document-text.svg?color=%23ffffff"
                                    color="gray"
                                />
                            </div>
                            <div onClick={handleRunCode}>
                                <IconButton
                                    url="https://api.iconify.design/fe:play.svg?color=%23ffffff"
                                    color="orange"
                                />
                            </div>
                        </div>
                    )}
                </div>
                {phase === "answer" ? (
                    <Editor
                        options={{
                            fontFamily: "Inter, Noto Sans JP",
                            fontSize: 16,
                            fontWeight: "600",
                            readOnly: true, //読み込みの有無を切り替え
                            scrollBeyondLastLine: false,
                            minimap: { enabled: false },
                        }}
                        height="90%"
                        width="100%"
                        defaultLanguage="c"
                        onChange={handleChange}
                        value={questionCode}
                        theme="CustomTheme"
                        beforeMount={handleEditorDidMount}
                    />
                ) : (
                    <div className={styles.documentBox}>
                        <ReactMarkdown>{documentCode}</ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};

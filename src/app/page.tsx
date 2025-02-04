"use client";
import styles from "./page.module.css";
import { Left } from "@/components/layout/left";
import { Code } from "@/components/layout/right/Code";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Left />
            </main>
            <div
                style={{
                    width: "800px",
                }}
            >
                <Code phase="read" />
            </div>
        </div>
    );
}

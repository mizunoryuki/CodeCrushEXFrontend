"use client";
import styles from "./page.module.css";
import { Left } from "@/components/layout/left";
import { Right } from "@/components/layout/right";
import { SideMenu } from "@/components/layout/SideMenu";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Left />
                <Right />
                <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </main>
        </div>
    );
}

import styles from "./page.module.scss";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.layout}>
            <h1>プレイヤーマッチング</h1>
            {children}
        </div>
    );
}

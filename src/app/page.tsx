import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <Link href="/matching">
            <div className={styles.main}>
                <Image src="\logo.svg" alt="icon" width={450} height={100} />
            </div>
        </Link>
    );
}

import { Left } from "@/components/layout/left";
import { Right } from "@/components/layout/right";
import styles from "./page.module.scss";

const Page = () => {
    return (
        <div className={styles.main}>
            <Left />
            <Right />
        </div>
    );
};

export default Page;

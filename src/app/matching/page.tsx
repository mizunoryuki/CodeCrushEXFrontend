import { TextButton } from "@/components/elements/TextButton";
import styles from "./page.module.scss";
const Page = () => {
    return (
        <div className={styles.page}>
            <h1>Page</h1>
            <div>
                <TextButton color="blue">あいうえお</TextButton>
                <TextButton color="blue">あいうえお</TextButton>
            </div>
        </div>
    );
};

export default Page;

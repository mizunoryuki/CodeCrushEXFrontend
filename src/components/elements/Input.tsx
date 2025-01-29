import styles from "./Input.module.scss";

interface Props {
    placeholder: string;
    iconUrl: string;
}
export const Input = ({ placeholder, iconUrl }: Props) => {
    return (
        <div>
            <input
                placeholder={placeholder}
                className={styles.input}
                // style={{
                //     backgroundImage: `url(${iconUrl})`,
                // }}
                required
            />
        </div>
    );
};

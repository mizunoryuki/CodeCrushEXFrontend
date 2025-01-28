import styles from "./PhaseIcon.module.scss";

interface Props {
    phase: "read" | "delete" | "fix" | "answer";
    isOn: boolean;
}

interface IconProps {
    state: boolean;
}

export const PhaseIcon = ({ phase, isOn }: Props) => {
    return (
        <div
            className={`${styles.phaseBox} ${
                isOn === false
                    ? styles.phaseOff
                    : phase === "read"
                    ? styles.phaseRead
                    : phase === "delete"
                    ? styles.phaseDelete
                    : phase === "fix"
                    ? styles.phaseFix
                    : phase === "answer"
                    ? styles.phaseAnswer
                    : ""
            }`}
        >
            {phase === "read" ? <Read state={isOn} /> : null}
            {phase === "delete" ? <Delete state={isOn} /> : null}
            {phase === "fix" ? <Fix state={isOn} /> : null}
            {phase === "answer" ? <Answer state={isOn} /> : null}
        </div>
    );
};

const Read = ({ state }: IconProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={
                    state ? "var(--color-yellow)" : "var(--color-light-blue)"
                }
                width="60%"
                height="60%"
            >
                <g
                    fill={
                        state
                            ? "var(--color-yellow)"
                            : "var(--color-light-blue)"
                    }
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                </g>
            </svg>
        </>
    );
};

const Delete = ({ state }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width="50%"
            height="50%"
        >
            <path
                fill={state ? "var(--color-red)" : "var(--color-light-blue)"}
                d="M17.25 18H22v2h-6.75zm-12.5 2l-2.125-2.125q-.575-.575-.587-1.425T2.6 15l11-11.4q.575-.6 1.413-.6t1.412.575L21.4 8.55q.575.575.575 1.425T21.4 11.4L13 20z"
            />
        </svg>
    );
};

const Fix = ({ state }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width="50%"
            height="50%"
        >
            <path
                fill={state ? "var(--color-green)" : "var(--color-light-blue)"}
                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
            />
        </svg>
    );
};

const Answer = ({ state }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width="50%"
            height="50%"
        >
            <g fill={state ? "var(--color-blue)" : "var(--color-light-blue)"}>
                <path
                    fillRule="evenodd"
                    d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5m6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
                    clipRule="evenodd"
                ></path>
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279a9.77 9.77 0 0 0-6.963-6.963"></path>
            </g>
        </svg>
    );
};

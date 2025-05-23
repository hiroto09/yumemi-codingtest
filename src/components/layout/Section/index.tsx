import styles from './index.module.scss';

type SectionProps = {
    title: string;
    children?: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

import styles from './page.module.scss';
import Populations from '@/components/Populations';
import Prefectures from '@/components/Prefectures';

export default function Home() {
    return (
        <main className={styles.main}>
            <Prefectures />
            <Populations />
        </main>
    );
}

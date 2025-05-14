import styles from './index.module.scss';
import CheckBox from './CheckBox';
import { Prefectures } from '@/types/prefectures';

export default async function PrefList() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) throw new Error('環境変数 API_URL が設定されていません');

    const url = new URL('/api/prefectures', API_URL);

    const response = await fetch(url.toString(), {
        cache: 'no-store',
    });

    const prefectures: Prefectures = await response.json();

    return (
        <div className={styles.list}>
            {prefectures.map((pref) => (
                <div key={pref.prefCode}>
                    <li>
                        {pref.prefName}
                        <CheckBox prefCode={pref.prefCode} prefName={pref.prefName} />
                    </li>
                </div>
            ))}
        </div>
    );
}

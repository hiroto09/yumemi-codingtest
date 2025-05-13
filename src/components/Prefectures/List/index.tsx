import GET from '@/app/api/prefectures/route'; // APIから都道府県データを取得する関数
import styles from './index.module.scss';
import CheckBox from './CheckBox';

export default async function PrefList() {
    const prefectures = await GET();

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

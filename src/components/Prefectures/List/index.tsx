import getPrefectures from '@/api/prefectures/route';
import styles from './index.module.scss';
import CheckBox from './CheckBox';

export default async function PrefList() {
    const prefectures = await getPrefectures();

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

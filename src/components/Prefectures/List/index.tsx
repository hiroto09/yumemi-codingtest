import getPrefectures from "@/api/prefectures/route";
import styles from "./index.module.scss";

export default async function PrefList() {
    const prefectures = await getPrefectures();
    
    return (
        <div className={styles.list}>
            {prefectures.map((pref) => (
                <div key={pref.prefCode}>
                    <li>
                        {pref.prefName}
                        
                    </li>
                </div>
            ))}
        </div>
    );
}

import { StatsItem } from "@/app/types/statsCard";
import styles from "./StatsCard.module.css";
import utils from "../../styles/utils.module.css";

const StatsCard = ({ item }: { item: StatsItem }) => {
    const { title, total, diff, icon: Icon, isPrice, hideDiff } = item;

    return (
        <div className={`${styles.statsCard} ${utils["flexBetween"]}`}>
            <div className={styles.statsCardContent}>
                <p className={styles.statsCardTitle}>{title}</p>
                <p className={styles.statsCardTotal}>{isPrice ? "￥" : ""}{total.toLocaleString()}</p>
                <span className={styles.statsCardDiff}>{!hideDiff ? `${diff}%` : "　"}</span>
            </div>
            <div className={styles.statsCardIcon}>
                <Icon size={30} color="#1e4fd4"/>
            </div>
        </div>
    )
}

export default StatsCard;
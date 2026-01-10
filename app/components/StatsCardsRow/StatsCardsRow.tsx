import StatsCard from "../StatsCard/StatsCard";
import { StatsItem } from "../../types/statsCard";
import utils from "../../styles/utils.module.css";
import styles from "./StatsCardsRow.module.css";
import { GrCube } from "react-icons/gr";
import { FaDollarSign, FaRegStar } from "react-icons/fa";

const statsCardItems: StatsItem[] = [
    { title: "総カード数", total: 1540, diff: 12, icon: GrCube, isPrice: false, hideDiff: false },
    { title: "コレクション価値", total: 753010, diff: 12, icon: FaDollarSign, isPrice: true, hideDiff: false },
    { title: "お気に入り", total: 144, icon: FaRegStar, isPrice: false, hideDiff: true },
  ];

const StatsCardsRow = () => {
    return (
        <div className={`${utils["flexBetween"]} ${styles.StatsCardsRow}`}>
          {statsCardItems.map((item) => (
            <StatsCard key={item.title} item={item} />
          ))}
        </div>
    )
}

export default StatsCardsRow;
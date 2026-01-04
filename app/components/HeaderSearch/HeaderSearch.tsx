import { Search } from "lucide-react";
import styles from "./HeaderSearch.module.css"
import utils from "../../styles/utils.module.css"

const HeaderSearch = () => {
    return (
        <div className={`${styles.searchBarWrapper} ${utils["flexBetween"]}`}>
            <input
                type="text"
                placeholder="カードを検索"
                className={styles.searchBarInput}
            />
            <Search size={18} className={styles.searchBarIcon} />
        </div>
    )
}

export default HeaderSearch;
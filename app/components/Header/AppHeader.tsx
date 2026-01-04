import HeaderSearch from "../HeaderSearch/HeaderSearch";
import { User } from "lucide-react";
import styles from "./AppHeader.module.css"
import utils from "../../styles/utils.module.css"

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={`${utils["flexBetween"]} ${styles.headerFlex}`}>
                    <h1 className={styles.headerLogo}>TCG Manager</h1>
                    <HeaderSearch />
                    <div className={`${styles.headerActionsWrapper} ${utils["flexRight"]}`}>
                        <button className={styles.headerAddCardButton}>
                            カードを追加
                        </button>
                        <User size={20} className={styles.headerUserButton} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
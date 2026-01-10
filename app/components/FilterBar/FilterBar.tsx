'use client'

import { useState } from "react";
import utils from "../../styles/utils.module.css";
import styles from "./FilterBar.module.css";
import Select from "../Select/Select";
import { RARITY_OPTIONS, SORT_OPTIONS } from "@/app/constants/filterOptions";

const FilterBar = () => {
    const [rarity, setRarity] = useState("all");
    const [sort, setSort] = useState("new");

    return (
        <div className={styles.filterBarWrapper}>
            <div className={`${utils["flexLeft"]} ${styles.controls}`}>
                <Select
                    label="レアリティ"
                    value={rarity}
                    options={RARITY_OPTIONS}
                    onChange={setRarity}
                />
                <Select
                    label="並び替え"
                    value={sort}
                    options={SORT_OPTIONS}
                    onChange={setSort}
                />
            </div>
        </div>
    )
}

export default FilterBar;
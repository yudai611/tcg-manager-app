/*レア度選択プルダウンメニュー用*/
export const RARITY_OPTIONS = [
    { label: "すべて", value: "all" },
    { label: "AR", value: "ar" },
    { label: "SR", value: "sr" },
    { label: "SAR", value: "sar" },
    { label: "HR", value: "hr" },
    { label: "UR", value: "ur" },
] as const;

/*ソート選択プルダウンメニュー用 */
export const SORT_OPTIONS = [
    { label: "新しい順", value: "new" },
    { label: "古い順", value: "old" },
    { label: "価格が高い順", value: "price_desc" },
    { label: "価格が低い順", value: "price_asc" },
] as const;
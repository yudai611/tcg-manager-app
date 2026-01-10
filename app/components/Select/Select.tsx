type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    label: string;
    value: string;
    options: readonly Option[];
    onChange: (value: string) => void;
};

import styles from "./Select.module.css";

const Select = ({ label, value, options, onChange }: SelectProps) => {
    return (
        <div className={styles.selectWrapper}>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)} className={styles.select}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value} className={styles.option}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;
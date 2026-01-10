import FilterBar from "./components/FilterBar/FilterBar";
import StatsCardsRow from "./components/StatsCardsRow/StatsCardsRow";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className="">
      <main className={styles.main}>
        <StatsCardsRow />
        <FilterBar />
      </main>
    </div>
  );
}

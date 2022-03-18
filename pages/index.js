import styles from "styles/home.module.scss";
import { Navbar } from "components/Nav";
import MainAttention from "components/Attention";
import SneakPeak from "components/SneakPeak";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.doFlex}>
        <MainAttention />
        <SneakPeak />
      </section>
    </div>
  );
}

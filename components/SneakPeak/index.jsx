import styles from "./sneakPeak.module.scss";
import { data } from "./data";

const SneakPeak = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Sneak peek of what to expect</h3>
      <ol>
        {data?.map((item, index) => (
          <li className={styles.offers} key={index}>
            <span className={styles.animateFire}>•</span> {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SneakPeak;

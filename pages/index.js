import styles from "styles/home.module.scss";
import { Navbar } from "components/Nav";
import MainAttention from "components/Attention";
import SneakPeak from "components/SneakPeak";
import SocialIcons from "components/SocialIcons";
import FeedBackModal from "components/FeedbackModal";
import { useState } from "react";
export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.doFlex}>
        <MainAttention showModal={showModal} />
        <SneakPeak />
      </section>
      <FeedBackModal visible={isModalVisible} closeModal={closeModal} />
      <SocialIcons />
    </div>
  );
}

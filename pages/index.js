import styles from "styles/home.module.scss";
import { Navbar } from "components/Nav";
import MainAttention from "components/Attention";
import SneakPeak from "components/SneakPeak";
import SocialIcons from "components/SocialIcons";
// import FeedBackModal from "components/FeedbackModal";
// import { useState } from "react";
import "antd/dist/antd.css";
// import { Modal } from "antd";

export default function Home() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const closeModal = () => {
  //   setIsModalVisible(false);
  // };
  function success() {
    Modal.success({
      content: "some messages...some messages...",
    });
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.doFlex}>
        <MainAttention showModal={success} />
        <SneakPeak />
      </section>
      {/* <FeedBackModal visible={isModalVisible} closeModal={closeModal} /> */}
      <SocialIcons />
    </div>
  );
}

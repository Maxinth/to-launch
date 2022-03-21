import React from "react";
import styles from "./socialIcons.module.scss";
import { data } from "./data";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const { name, iconSrc } = item;
        return (
          <div className={styles.icon} key={name}>
            <Image src={iconSrc} width="20" height="20" alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;

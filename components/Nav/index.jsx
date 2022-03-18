import styles from "./Navbar.module.scss";
import Logo, { MobileLogo } from "../authlayout/logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className={`${styles.navContainer} ${navBg && styles.navBg}`}>
        <Link href="/">
          <a className={styles.imgCont}>
            <Logo />
          </a>
        </Link>
        <div className={styles.MobileLogo} onClick={() => router.push("/")}>
          <MobileLogo />
        </div>
      </nav>
    </>
  );
};

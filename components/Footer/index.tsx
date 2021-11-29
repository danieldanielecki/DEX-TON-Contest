import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        Powered by
      </span>
      <Image
        alt="The Open Network (TON)"
        height={50}
        src="/logo_white.svg"
        title="The Open Network (TON)"
        width={120}
      />
    </footer>
  );
};

export default Footer;

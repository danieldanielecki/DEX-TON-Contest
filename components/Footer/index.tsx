import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by{" "}
      <span className={styles.logo}>
        <Image
          alt="The Open Network (TON)"
          height={72}
          src="/logo.svg"
          title="The Open Network (TON)"
          width={72}
        />
      </span>
    </footer>
  );
};

export default Footer;

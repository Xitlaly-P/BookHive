import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Image
          src="/images/logo.svg"
          alt="The Book Hive Logo"
          width={72}
          height={72}
        />
        <h2 className={styles.title}>The Book Hive</h2>
        <p className={styles.copyright}>
          The Book Hive © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

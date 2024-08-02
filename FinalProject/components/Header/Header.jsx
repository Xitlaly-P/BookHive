import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.bg}>
      <header className={`${styles.header} container`}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="The Book Hive Logo"
            width={40}
            height={40}
          />
          <span>The Book Hive</span>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className={styles.navLink}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/join" className={styles.navLink}>
                Join
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

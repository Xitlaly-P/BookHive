import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.inside_bg}>
        <section className={`${styles.heroSection} container `}>
          <div className={styles.content}>
            <h1 className={styles.title} data-testid="hero-title">The Book Hive</h1>
            <p className={styles.description} data-testid="hero-description">
              A family-run bookstore and café where everyone feels at home.
              Trusted by over 500 local book lovers and counting! Join your
              community at The Book Hive
            </p>
            <a href="#about">
              <button>DISCOVER MORE</button>
            </a>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/hero_bg.png"
              alt="People browsing books"
              height={630}
              width={537}
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;

import styles from './about.module.scss';
import common from '../../styles/common.module.scss';
import Link from 'next/link';

const About = ({ data }) => (
  <>
    <section id="About" className={styles.section}>
      <div className={styles.abtContainer}>
        <div className={styles.abtRow}>
          <div className={styles.abtImg}>
            <img src="/image/cover_bg_2.jpg" alt="" />
          </div>
          <div className={styles.abtTxt}>
            <div className={styles.abtDesc}>
              <h1>{data.header.title}</h1>
              <div className={styles.p3}>
                <h2>{data.header.caption}</h2>
                <p>{data.biography}</p>
                <p>
                  <Link href="/contact">
                    <a>Contact me</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
    <div className={common.separated} />
  </>
);

export default About;

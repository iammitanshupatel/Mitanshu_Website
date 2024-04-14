import styles from './education.module.scss';
import commonStyles from 'styles/common.module.scss';
import Link from 'next/link';
import { useMemo } from 'react';

const Education = ({ data }) => {
  const headerTitle = data?.header?.title;
  const headerCaption = data?.header?.caption;
  const eduTextForHome = data?.eduTextForHome;
  const skills = data?.skills || [];

  const renderSkills = useMemo(
    () =>
      skills.map(x => (
        <div key={x?.id} className={`${styles.eduWrap} ${commonStyles.progressWrap}`}>
          <h4>
            <a
              aria-label={`View more about ${x?.title} technology`}
              href={x?.link}
              target="_blank"
              rel="noreferrer">
              {x?.title}
            </a>
          </h4>
          <div className={`${commonStyles.progress} ${styles.eduWrap}`}>
            <div className={commonStyles.progressBar} style={{ width: `${x?.rating}%` }}>
              <span>{`${x?.rating}%`}</span>
            </div>
          </div>
        </div>
      )),
    [skills],
  );

  return (
    <>
      <section id="Education">
        <div className={commonStyles.srvContainer}>
          <div className={commonStyles.secDesc}>
            <h2>{headerTitle}</h2>
            <div className={commonStyles.p2}>
              <h3>{headerCaption}</h3>
            </div>
          </div>
          <div className={styles.eduRow}>
            <div className={styles.eduLeft}>
              <div className={styles.eduText}>
                <p>{eduTextForHome}</p>
                <p>
                  <Link href="/about" aria-label="Go to about page">
                    Checkout my resume
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.eduRight}>{renderSkills}</div>
          </div>
        </div>
      </section>
      <div className={commonStyles.separated} />
    </>
  );
};

export default Education;

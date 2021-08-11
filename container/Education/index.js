import styles from './education.module.scss';
import common from 'styles/common.module.scss';
import Link from 'next/link';

const Education = ({ data }) => (
  <>
    <section id="Education">
      <div className={common.srvContainer}>
        <div className={common.secDesc}>
          <h1>{data?.Header.title}</h1>
          <div className={common.p2}>
            <h2>{data?.Header.caption}</h2>
          </div>
        </div>
        <div className={styles.eduRow}>
          <div className={styles.eduLeft}>
            <div className={styles.eduText}>
              <p>{data?.eduTextForHome}</p>
              <p>
                <Link href="/about">
                  <a aria-label="Go to about page">Checkout my resume</a>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.eduRight}>
            {data?.skills?.map(x => (
              <div key={x?.id} className={`${styles.eduWrap} ${common.progressWrap}`}>
                <h2>
                  <a
                    aria-label={`View more about ${x?.title} technology`}
                    href={x?.link}
                    target="_blank"
                    rel="noreferrer">
                    {x?.title}
                  </a>
                </h2>
                <div className={`${common.progress} ${styles.eduWrap}`}>
                  <div className={common.progressBar} style={{ width: `${x?.rating}%` }}>
                    <span>{`${x?.rating}%`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div className={common.separated} />
  </>
);

export default Education;

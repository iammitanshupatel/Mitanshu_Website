import styles from './about.module.scss';
import common from 'styles/common.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import PreLoader from 'component/PreLoader';

const About = ({ data }) => {
  if (!data) return <PreLoader />;
  return (
    <>
      <section id="About" className={styles.section}>
        <div className={styles.abtContainer}>
          <div className={styles.abtRow}>
            <div className={styles.abtImg}>
              <Image
                src={data?.myImage?.url.replace(
                  'upload',
                  'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                )}
                width={700}
                height={475}
                alt="My Image"
              />
            </div>
            <div className={styles.abtTxt}>
              <div className={styles.abtDesc}>
                <h1>{data.header.title}</h1>
                <div className={styles.p3}>
                  <h2>{data.header.caption}</h2>
                  <p>{data.biography}</p>
                  <p>
                    <Link href="/contact">
                      <a aria-label="Go to contact page">Contact me</a>
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
};

export default About;

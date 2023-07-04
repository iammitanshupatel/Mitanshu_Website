import styles from './about.module.scss';
import common from 'styles/common.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import PreLoader from 'component/PreLoader';
import useProgressiveImage from 'hooks/useProgressiveImage';
import { isIOS } from 'react-device-detect';

const About = ({ data }) => {
  const url = data?.myImage?.url?.replace('upload', 'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto');
  const urlPlaceholder = data?.myImage?.url?.replace(
    'upload',
    'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  );
  const loaded = useProgressiveImage(url, urlPlaceholder);
  if (!data) return <PreLoader />;
  if (isIOS) {
    const url = data?.myImage?.url.replace('upload', 'upload/c_scale,dpr_auto,f_png,q_auto,w_auto');
    const urlPlaceholder = data?.myImage?.url?.replace(
      'upload',
      'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_png/e_grayscale',
    );
    const loaded = useProgressiveImage(url, urlPlaceholder);
    return (
      <>
        <section id="About" className={styles.section}>
          <div className={styles.abtContainer}>
            <div className={styles.abtRow}>
              <div className={styles.abtImg}>
                <Image
                  priority
                  src={loaded || urlPlaceholder}
                  width={700}
                  height={475}
                  alt={data?.myImage?.name}
                />
              </div>
              <div className={styles.abtTxt}>
                <div className={styles.abtDesc}>
                  <h1>{data?.header?.[0]?.title}</h1>
                  <div className={styles.p3}>
                    <h2>{data?.header?.[0]?.caption}</h2>
                    <p>{data?.shortDescription}</p>
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
  }
  return (
    <>
      <section id="About" className={styles.section}>
        <div className={styles.abtContainer}>
          <div className={styles.abtRow}>
            <div className={styles.abtImg}>
              <Image
                priority
                src={loaded || urlPlaceholder}
                width={700}
                height={475}
                alt={data?.myImage?.name}
              />
            </div>
            <div className={styles.abtTxt}>
              <div className={styles.abtDesc}>
                <h1>{data?.header?.[0]?.title}</h1>
                <div className={styles.p3}>
                  <h2>{data?.header?.[0]?.caption}</h2>
                  <p>{data?.shortDescription}</p>
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

import { isIOS } from 'react-device-detect';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.scss';
import commonStyles from 'styles/common.module.scss';
import PreLoader from 'component/PreLoader';
import useProgressiveImage from 'hooks/useProgressiveImage';

const About = ({ data }) => {
  const imageBaseUrl = data?.myImage?.url;
  const url = imageBaseUrl?.replace('upload', 'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto');
  const urlPlaceholder = imageBaseUrl?.replace(
    'upload',
    'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  );
  const loaded = useProgressiveImage(url, urlPlaceholder);

  if (!data) return <PreLoader />;

  const iosUrl = isIOS
    ? imageBaseUrl?.replace('upload', 'upload/c_scale,dpr_auto,f_png,q_auto,w_auto')
    : null;
  const iosUrlPlaceholder = isIOS
    ? imageBaseUrl?.replace(
        'upload',
        'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_png/e_grayscale',
      )
    : null;
  const iosLoaded = isIOS ? useProgressiveImage(iosUrl, iosUrlPlaceholder) : null;

  return (
    <>
      <section id="About" className={styles.section}>
        <div className={styles.abtContainer}>
          <div className={styles.abtRow}>
            <div className={styles.abtImg}>
              <Image
                priority
                src={isIOS ? iosLoaded || iosUrlPlaceholder : loaded || urlPlaceholder}
                width={700}
                height={475}
                alt={data?.myImage?.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className={styles.abtTxt}>
              <div className={styles.abtDesc}>
                <h1>{data?.header?.[0]?.title}</h1>
                <div className={styles.p3}>
                  <h2>{data?.header?.[0]?.caption}</h2>
                  <p>{data?.shortDescription}</p>
                  <p>
                    <Link href="/contact" aria-label="Go to contact page">
                      Contact me
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
      <div className={commonStyles.separated} />
    </>
  );
};

export default About;

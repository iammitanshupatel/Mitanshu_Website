/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import styles from './home.module.scss';
import common from 'styles/common.module.scss';
const PreLoader = dynamic(() => import('component/PreLoader'));
const ReactRotatingText = dynamic(() => import('react-rotating-text'), {
  loading: () => <PreLoader />,
});
import useProgressiveImage from 'hooks/useProgressiveImage';
import { isIOS } from 'react-device-detect';
const Home = ({ data }) => {
  const newUrl = 'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto';
  const url = data?.backgroundImage.url.replace('upload', newUrl);
  const urlPlaceholder = data?.backgroundImage.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  );
  const loaded = useProgressiveImage(url, urlPlaceholder);
  if (!data) return <PreLoader />;
  if (isIOS) {
    const newUrl = 'upload/c_scale,dpr_auto,f_jpg,q_auto,w_auto';
    const url = data?.backgroundImage.url.replace('upload', newUrl);
    const urlPlaceholder = data?.backgroundImage.url.replace(
      'upload',
      'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_jpg/e_grayscale',
    );
    const loaded = useProgressiveImage(url, urlPlaceholder);
    return (
      <section
        style={{
          backgroundImage: `url(${loaded || urlPlaceholder})`,
          backgroundAttachment: 'unset',
        }}
        className={styles.imgCover}>
        <div className={styles.homeContainer}>
          <div className={styles.homeWrap}>
            <div className={styles.homeTxt}>
              <h1>
                <strong> {`${data?.firstName} ${data?.lastName}`}</strong>
              </h1>
              <h2>
                {data?.description}
                <ReactRotatingText items={data?.bannerSpan.map(x => x?.text)} />
              </h2>
            </div>
          </div>
        </div>
        <a aria-label="Scroll to about section" href="#About" className={common.mouseWrap}>
          <span className={common.mouse}>
            <span className={common.scroll} />
          </span>
          <span className={common.mouseLabel}>Scroll</span>
        </a>
      </section>
    );
  }
  return (
    <>
      <section
        style={{ backgroundImage: `url(${loaded || urlPlaceholder})` }}
        className={styles.imgCover}>
        <div className={styles.homeContainer}>
          <div className={styles.homeWrap}>
            <div className={styles.homeTxt}>
              <h1>
                <strong> {`${data?.firstName} ${data?.lastName}`}</strong>
              </h1>
              <h2>
                {data?.description}
                <ReactRotatingText items={data?.bannerSpan.map(x => x?.text)} />
              </h2>
            </div>
          </div>
        </div>
        <a aria-label="Scroll to about section" href="#About" className={common.mouseWrap}>
          <span className={common.mouse}>
            <span className={common.scroll} />
          </span>
          <span className={common.mouseLabel}>Scroll</span>
        </a>
      </section>
    </>
  );
};

export default Home;

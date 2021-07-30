import dynamic from 'next/dynamic';
import styles from './home.module.scss';
import common from '../../styles/common.module.scss';
const PreLoader = dynamic(() => import('../../component/PreLoader'));
const ReactRotatingText = dynamic(() => import('react-rotating-text'), {
  loading: () => <PreLoader />,
});
const { useEffect, useState } = dynamic(() => import('react'));
import useProgressiveImage from '../../hooks/useProgressiveImage';

const Home = ({ data }) => {
  const url = data.backgroundImage.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
  );
  const urlPlaceholder = data.backgroundImage.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  );
  const loaded = useProgressiveImage(url, urlPlaceholder);
  return (
    <>
      <section
        style={{ backgroundImage: `url(${loaded || urlPlaceholder})` }}
        className={styles.imgCover}>
        <div className={styles.homeContainer}>
          <div className={styles.homeWrap}>
            <div className={styles.homeTxt}>
              <h1>{`${data.firstName} ${data.lastName}`}</h1>
              <h2>
                {data.description}
                <ReactRotatingText items={data.bannerSpan.map(x => x.text)} />
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

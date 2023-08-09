import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from './home.module.scss';
import common from 'styles/common.module.scss';
import useProgressiveImage from 'hooks/useProgressiveImage';
import { isIOS } from 'react-device-detect';

const PreLoader = dynamic(() => import('component/PreLoader'));
const ReactRotatingText = dynamic(() => import('react-rotating-text'), {
  loading: () => <PreLoader />,
});

const optimizeImageUrl = (url, options) => {
  return url?.replace('upload', options);
};

const Home = ({ data }) => {
  if (!data) return <PreLoader />;

  const firstName = data?.firstName || '';
  const lastName = data?.lastName || '';
  const description = data?.description || '';
  const bannerTexts = data?.bannerSpan?.map(x => x?.text) || [];

  const imageUrlOptions = isIOS
    ? 'upload/c_scale,dpr_auto,f_jpg,q_auto,w_auto'
    : 'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto';

  const url = useMemo(
    () => optimizeImageUrl(data?.backgroundImage?.url, imageUrlOptions),
    [data?.backgroundImage?.url],
  );
  const urlPlaceholder = useMemo(
    () =>
      optimizeImageUrl(
        data?.backgroundImage?.url,
        isIOS
          ? 'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_jpg/e_grayscale'
          : 'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
      ),
    [data?.backgroundImage?.url],
  );

  const loaded = useProgressiveImage(url, urlPlaceholder);

  return (
    <section
      style={{
        backgroundImage: `url(${loaded || urlPlaceholder})`,
        backgroundAttachment: isIOS ? 'unset' : 'scroll',
      }}
      className={styles.imgCover}>
      <div className={styles.homeContainer}>
        <div className={styles.homeWrap}>
          <div className={styles.homeTxt}>
            <h1>
              <strong>{`${firstName} ${lastName}`}</strong>
            </h1>
            <h2>
              {description}
              <ReactRotatingText items={bannerTexts} />
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
};

export default Home;

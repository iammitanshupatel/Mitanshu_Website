import styles from './fullImageHeaderPage.module.scss';
import common from '../../styles/common.module.scss';
import useProgressiveImage from '../../hooks/useProgressiveImage';

const FullImageHeaderPage = ({ data }) => {
  //   const url = data.backgroundImage.url.replace(
  //     'upload',
  //     'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
  //   );
  //   const urlPlaceholder = data.backgroundImage.url.replace(
  //     'upload',
  //     'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  //   );
  //   const loaded = useProgressiveImage(url, urlPlaceholder);
  return (
    <>
      <div className={`${common.fullImage} ${common.hero}`}>
        <div className={common.fullText}>
          <div className={common.outer}>
            <div className={common.inner}>
              <span>{data.roleOfAdmin}</span>
              <h1>{data.adminName}</h1>
            </div>
            <a href="#scrollHere" aria-label="Scroll down" className={common.mouseWrap}>
              <span className={common.mouse}>
                <span className={common.scroll} />
              </span>
              <span className={common.mouseLabel}>Scroll</span>
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(/image/cover_bg_2.jpg)' }}
          className={common.imgOverlay}
        />
      </div>
      <div id="scrollHere" />
      <div className={`${common.containerCtc} ${common.textWidget} ${styles.separatedTop}`}>
        <div className={common.abtWrap}>
          <h2>Bio.</h2>
          <p>{data.biography}</p>
        </div>
      </div>
    </>
  );
};

export default FullImageHeaderPage;

import styles from './fullImageHeaderPage.module.scss';
import common from '../../styles/common.module.scss';

const FullImageHeaderPage = ({ data }) => (
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
        <h3>Bio.</h3>
        <p>{data.biography}</p>
      </div>
    </div>
  </>
);

export default FullImageHeaderPage;

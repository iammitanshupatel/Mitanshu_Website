import styles from './blogPageHeader.module.scss';
import common from '../../common-styles/common.module.scss';

const BlogPageHeader = ({ data }) => (
  <div className={`${common.fullImage} ${common.hero}`}>
    <div className={common.fullText}>
      <div className={common.outer}>
        <div className={common.inner}>
          <h1>{data.blogPageHeader}</h1>
        </div>
        <a href="#scrollHere" className={common.mouseWrap}>
          <span className={common.mouse}>
            <span className={common.scroll} />
          </span>
          <span className={common.mouseLabel}>Scroll</span>
        </a>
      </div>
    </div>
    <div className={styles.blogImgOverlay} />
  </div>
);

export default BlogPageHeader;

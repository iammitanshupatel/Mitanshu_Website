import common from '../../styles/common.module.scss';

const BlogPageHeader = ({ data }) => (
  <div className={`${common.fullImage} ${common.hero}`}>
    <div className={common.fullText}>
      <div className={common.outer}>
        <div className={common.inner}>
          <h1>{data.blogPageHeader}</h1>
        </div>
        <a href="#scrollHere" aria-label="Scroll Down" className={common.mouseWrap}>
          <span className={common.mouse}>
            <span className={common.scroll} />
          </span>
          <span className={common.mouseLabel}>Scroll</span>
        </a>
      </div>
    </div>
    <div
      style={{ backgroundImage: `url(${data.backgroundImage.url})` }}
      className={common.imgOverlay}
    />
  </div>
);

export default BlogPageHeader;

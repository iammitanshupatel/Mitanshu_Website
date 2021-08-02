import useProgressiveImage from 'hooks/useProgressiveImage';
import common from 'styles/common.module.scss';

const BlogPageHeader = ({ data }) => {
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
        style={{ backgroundImage: `url(${loaded || urlPlaceholder})` }}
        className={common.imgOverlay}
      />
    </div>
  );
};

export default BlogPageHeader;

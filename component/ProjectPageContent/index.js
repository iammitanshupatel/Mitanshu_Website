import Image from 'next/image';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('../Card'));
import common from 'styles/common.module.scss';
import useProgressiveImage from 'hooks/useProgressiveImage';
import { isIOS } from 'react-device-detect';

const ProjectPageContent = ({ data }) => {
  data?.projects?.sort((a, b) => {
    var dateA = new Date(a.published_at),
      dateB = new Date(b.published_at);
    return dateB - dateA;
  });
  const urlBanner = data?.backgroundImage?.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
  );
  const urlPlaceholder = data?.backgroundImage?.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  );
  const loaded = useProgressiveImage(urlBanner, urlPlaceholder);
  if (isIOS) {
    const urlBanner = 'upload/c_scale,dpr_auto,f_jpg,q_auto,w_auto';
    const url = data?.backgroundImage?.url.replace('upload', urlBanner);
    const urlPlaceholder = data?.backgroundImage.url.replace(
      'upload',
      'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_jpg/e_grayscale',
    );
    const loaded = useProgressiveImage(url, urlPlaceholder);
    return (
      <>
        <div className={`${common.fullImage} ${common.hero}`}>
          <div className={common.fullText}>
            <div className={common.outer}>
              <div className={common.inner}>
                <h1>{data?.projectPageHeader}</h1>
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
            style={{
              backgroundImage: `url(${loaded || urlPlaceholder})`,
              backgroundAttachment: 'unset',
            }}
            className={common.imgOverlay}
          />
        </div>
        <div id="scrollHere" />
        <div className={common.seperatedWithoutImg}>
          <div className={common.srvContainer}>
            <div className={common.srvCol}>
              <div className={common.cardRow}>
                {data?.projects?.map(x => (
                  <Card key={x?.id} variant="projectCard">
                    <figure>
                      <Image
                        layout="fill"
                        priority
                        src={x?.displayImage.url.replace(
                          'upload',
                          'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                        )}
                        alt={x?.displayImage?.name}
                      />
                      <figcaption>
                        <a href={`work/${x?.id}`} aria-label="View more details about portfolio">
                          <h2>{x?.title}</h2>
                          <p>{x?.typeOfPortfolio}</p>
                        </a>
                      </figcaption>
                    </figure>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`${common.fullImage} ${common.hero}`}>
        <div className={common.fullText}>
          <div className={common.outer}>
            <div className={common.inner}>
              <h1>{data?.projectPageHeader}</h1>
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
          style={{ backgroundImage: `url(${loaded || urlPlaceholder})` }}
          className={common.imgOverlay}
        />
      </div>
      <div id="scrollHere" />
      <div className={common.seperatedWithoutImg}>
        <div className={common.srvContainer}>
          <div className={common.srvCol}>
            <div className={common.cardRow}>
              {data?.projects?.map(x => (
                <Card key={x?.id} variant="projectCard">
                  <figure>
                    <Image
                      layout="fill"
                      priority
                      src={x?.displayImage.url.replace(
                        'upload',
                        'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                      )}
                      alt={x?.displayImage?.name}
                    />
                    <figcaption>
                      <a href={`work/${x?.id}`} aria-label="View more details about portfolio">
                        <h2>{x?.title}</h2>
                        <p>{x?.typeOfPortfolio}</p>
                      </a>
                    </figcaption>
                  </figure>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPageContent;

import { useEffect, useRef, useState } from 'react';
import Card from '../Card';
import styles from './projectPageContent.module.scss';
import common from '../../common-styles/common.module.scss';

const ProjectPageContent = ({ data }) => (
  <>
    <div className={`${common.fullImage} ${common.hero}`}>
      <div className={common.fullText}>
        <div className={common.outer}>
          <div className={common.inner}>
            <h1>{data.projectPageHeader}</h1>
          </div>
          <a href="#scrollHere" className={common.mouseWrap}>
            <span className={common.mouse}>
              <span className={common.scroll} />
            </span>
            <span className={common.mouseLabel}>Scroll</span>
          </a>
        </div>
      </div>
      <div className={styles.workImgOverlay} />
    </div>
    <div id="scrollHere" />
    <div className={common.seperatedWithoutImg}>
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={common.cardRow}>
            {data.projects.map(x => (
              <Card key={x.id} variant="projectCard">
                <figure>
                  <img src="/image/Project/img-2.jpg" alt="" />
                  <figcaption>
                    <a href={`work/${x.id}`}>
                      <h3>{x.title}</h3>
                      <p>{x.typeOfPortfolio}</p>
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

export default ProjectPageContent;

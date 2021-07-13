import { useEffect, useRef, useState } from 'react';
import Card from '../../component/Card';
import Button from '../../component/Button';
import styles from './projects.module.scss';
import common from '../../styles/common.module.scss';

const Projects = ({ data }) => (
  <>
    <section id="Projects">
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={common.secDesc}>
            <h1>{data.header.title}</h1>
            <div className={common.p2}>
              <h2>{data.header.caption}</h2>
            </div>
          </div>
          {/* cardRow */}
          <div className={`${common.cardRow} ${styles.paddingB1}`}>
            {data.projects.map(x => (
              <Card variant="projectCard" key={x.id}>
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
          <Button btnText="Load More" locationPage="/work" />
        </div>
      </div>
    </section>
    <div className={common.separated} />
  </>
);

export default Projects;

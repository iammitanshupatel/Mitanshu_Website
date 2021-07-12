import { useEffect, useRef, useState } from 'react';
import Card from '../Card';

const ProjectPageContent = ({ data }) => (
  <>
    <div className="fullImage hero me">
      <div className="fullText">
        <div className="outer">
          <div className="inner">
            <h1>{data.projectPageHeader}</h1>
          </div>
          <a href="#scrollHere" className="mouse-wrap justifyCenter">
            <span className="mouse">
              <span className="scroll" />
            </span>
            <span className="mouse-label">Scroll</span>
          </a>
        </div>
      </div>
      <div className="workImgOverlay" />
    </div>
    <div id="scrollHere" />
    <div className="seperatedWithoutImg">
      <div className="srvContainer">
        <div className="srvCol">
          <div className="cardRow">
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
                  <div className="shine" />
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

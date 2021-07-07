import { useEffect, useRef, useState } from 'react';
import Card from '../Card';

const ProjectPageContent = ({ data }) => {
  const modalRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const btnClick = id => {
    modalRef.current.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setSelectedProject(id);
  };
  useEffect(() => {
    window.onclick = function windowClick(event) {
      if (event.target === modalRef.current) {
        modalRef.current.style.display = 'none';
        document.body.style.overflow = 'visible';
      }
    };
  }, []);
  return (
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
      <div className="speratedWithoutImg">
        <div className="srvContainer">
          <div className="srvCol">
            <div className="cardRow">
              {data.projects.map(x => (
                <Card variant="projectCard">
                  <figure>
                    <img src="/image/Project/img-2.jpg" alt="" />
                    <figcaption>
                      <button type="button" onClick={() => btnClick(x.id)}>
                        <h3>{x.title}</h3>
                        <p>{x.typeOfPortfolio}</p>
                      </button>
                    </figcaption>
                    <div className="shine" />
                  </figure>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div ref={modalRef} className="modal">
        {data.projects.map(x => {
          if (x.id === selectedProject) {
            return (
              <div className="paper">
                <h2>{x.title}</h2>
                <p>{x.description}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default ProjectPageContent;

import { useEffect, useRef, useState } from 'react';
import Card from '../../component/Card';
import Button from '../../component/Button';

const Projects = ({ data }) => {
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
      <section id="Projects">
        <div className="srvContainer">
          <div className="srvCol">
            <div className="secDesc">
              <h1>{data.header.title}</h1>
              <div className="p2">
                <h2>{data.header.caption}</h2>
              </div>
            </div>
            <div className="cardRow paddingB1">
              {data.projects.map(x => (
                <>
                  <Card variant="projectCard" key={x.id}>
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
                </>
              ))}
            </div>
            <Button btnText="Load More" locationPage="/WorkPage" />
          </div>
        </div>
      </section>
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
      <div className="separated" />
    </>
  );
};

export default Projects;

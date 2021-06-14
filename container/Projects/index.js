import { useEffect } from 'react';
import Card from '../../component/Card';
import Button from '../../component/Button';

const Projects = () => {
  const btnClick = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };
  useEffect(() => {
    const modal = document.getElementById('myModal');
    window.onclick = function windowClick(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
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
              <h1>Projects</h1>
              <div className="p2">
                <h2>What I Did</h2>
              </div>
            </div>
            <div className="cardRow">
              <Card variant="projectCard">
                <figure>
                  <img src="/image/Project/img-2.jpg" alt="" />
                  <figcaption>
                    <button type="button" onClick={btnClick}>
                      <h3>Personal Portfolio</h3>
                      <p>Website</p>
                    </button>
                  </figcaption>
                  <div className="shine" />
                </figure>
              </Card>
              <Card variant="projectCard">
                <figure>
                  <img src="/image/Project/img-3.jpg" alt="" />
                  <figcaption>
                    <button type="button" onClick={btnClick}>
                      <h3>Personal Portfolio</h3>
                      <p>Website</p>
                    </button>
                  </figcaption>
                  <div className="shine" />
                </figure>
              </Card>
              <Card variant="projectCard">
                <figure>
                  <img src="/image/Project/img-4.jpg" alt="" />
                  <figcaption>
                    <button type="button" onClick={btnClick}>
                      <h3>Personal Portfolio</h3>
                      <p>Website</p>
                    </button>
                  </figcaption>
                  <div className="shine" />
                </figure>
              </Card>
            </div>
            <Button btnText="Load More" locationPage="/WorkPage" />
          </div>
        </div>
      </section>
      <div id="myModal" className="modal">
        <div className="paper">
          <h2>Personal Portfolio</h2>
          <p>
            This is a personal portfolio developed for my self. This is a Dynamic website developed
            using Strapi, Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
      <div className="separated" />
    </>
  );
};

export default Projects;

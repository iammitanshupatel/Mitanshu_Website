import { useEffect } from 'react';

const WorkPage = () => {
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
      <div className="fullImage hero me">
        <div className="fullText">
          <div className="outer">
            <div className="inner">
              <h1>Projects I Have Worked On</h1>
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
      <div className="top120">
        <div className="srvContainer">
          <div className="srvCol">
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
            </div>
          </div>
        </div>
      </div>
      <div id="myModal" className="modal">
        <div className="paper">
          <h2>Personal Portfolio</h2>
          <p>
            This is a personal portfolio developed for my self. This is a Dynamic website developed
            using Strapi, Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkPage;

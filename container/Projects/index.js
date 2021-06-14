import { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '../../component/Card';
import Button from '../../component/Button';

const Projects = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('myBtn');
    btn.onclick = function btnClick() {
      modal.style.display = 'flex';
      document.documentElement.scroll();
    };

    window.onclick = function windowClick(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                    <button type="button" id="myBtn">
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
                    <button type="button" onClick={handleOpen}>
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
                    <button type="button" onClick={handleOpen}>
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
        {/* <!-- Modal content --> */}
        <div className="paper">
          <h2>Personal Portfolio</h2>
          <p>
            This is a personal portfolio developed for my self. This is a Dynamic website developed
            using Strapi, Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className="paper">
            <h2 id="transition-modal-title">Personal Portfolio</h2>
            <p id="transition-modal-description">
              This is a personal portfolio developed for my self. This is a Dynamic website
              developed using Strapi, Next.js & Tailwind CSS.
            </p>
          </div>
        </Fade>
      </Modal> */}
      <div className="separated" />
    </>
  );
};

export default Projects;

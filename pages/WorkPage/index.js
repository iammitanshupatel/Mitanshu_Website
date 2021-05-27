import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '../../component/Card';

const WorkPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="fullImage hero me">
        <div className="fullText">
          <div className="outer">
            <div className="inner">
              <h1>Projects I Have Done</h1>
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
            </div>
          </div>
        </div>
      </div>
      <Modal
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
      </Modal>
    </>
  );
};

export default WorkPage;

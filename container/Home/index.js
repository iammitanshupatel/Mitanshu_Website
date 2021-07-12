import { useRef, useEffect } from 'react';
import styles from './home.module.scss';
import ReactDOM from 'react-dom';
import ReactRotatingText from 'react-rotating-text';
import useMarkdown from '../../hooks/useMarkdown';

const RenderHtml = ({ html, node }) => {
  return ReactDOM.createPortal(<ReactRotatingText items={['x', 'y', 'z']} />, node);
};

const Home = ({ data }) => {
  const homeTextRef = useRef();
  const { HTML } = useMarkdown(data.description);
  //   console.log(`${HTML}${()}`);

  return (
    <>
      <section className={styles.imgCover}>
        <div className={styles.homeContainer}>
          <div className={styles.homeWrap}>
            {/* <div className="homeTxt" ref={homeTextRef}  /> */}
            {/* <div className="homeTxt" dangerouslySetInnerHTML={{ __html: HTML }} /> */}
            {/* {homeTextRef.current && <RenderHtml html={HTML} node={homeTextRef.current} />} */}
            <div className={styles.homeTxt}>
              {/* <h1>{`${data.firstName} ${data.lastName}`}</h1> */}
              <span dangerouslySetInnerHTML={{ __html: HTML }} />
              <ReactRotatingText items={['x', 'y', 'z']} />
            </div>
          </div>
        </div>
        <a href="#About" className={styles.mouseWrap}>
          <span className={styles.mouse}>
            <span className={styles.scroll} />
          </span>
          <span className={styles.mouseLabel}>Scroll</span>
        </a>
      </section>
    </>
  );
};

export default Home;

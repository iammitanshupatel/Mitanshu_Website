import styles from './home.module.scss';
import common from '../../styles/common.module.scss';
import ReactRotatingText from 'react-rotating-text';

const Home = ({ data }) => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${data.backgroundImage.url})` }}
        className={styles.imgCover}>
        <div className={styles.homeContainer}>
          <div className={styles.homeWrap}>
            <div className={styles.homeTxt}>
              <h1>{`${data.firstName} ${data.lastName}`}</h1>
              <h2>
                {data.description}
                <ReactRotatingText items={data.bannerSpan.map(x => x.text)} />
              </h2>
            </div>
          </div>
        </div>
        <a aria-label="Scroll to about section" href="#About" className={common.mouseWrap}>
          <span className={common.mouse}>
            <span className={common.scroll} />
          </span>
          <span className={common.mouseLabel}>Scroll</span>
        </a>
      </section>
    </>
  );
};

export default Home;

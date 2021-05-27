import ReactRotatingText from 'react-rotating-text';

const Home = () => (
  <>
    <section className="imgCover">
      <div className="homeContainer">
        <div className="homeWrap">
          <div className="homeTxt">
            <h1>Mitanshu Patel</h1>
            <h2>
              Creative Full-Stack Developer Located In India <br /> Specialized In
              <ReactRotatingText
                items={[
                  ' Creating Websites.',
                  ' Creating Mobile Applications.',
                  ' Designing UI/UX.',
                ]}
              />
            </h2>
          </div>
        </div>
      </div>
      <a href="#About" className="mouse-wrap">
        <span className="mouse">
          <span className="scroll" />
        </span>
        <span className="mouse-label">Scroll</span>
      </a>
    </section>
  </>
);

export default Home;

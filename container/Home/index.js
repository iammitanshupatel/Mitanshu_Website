import ReactRotatingText from 'react-rotating-text';

const Home = () => (
  <>
    <section className="imgCover">
      <div className="homeContainer">
        <div className="homeWrap">
          <div className="homeTxt">
            <h1>Mitanshu Patel</h1>
            <h2>
              Creative Full-Stack Developer Located In India <br />
              Specialized In{''}
              <ReactRotatingText items={[' first', ' second', ' third']} />
              {/* <span>fantastic</span>
              <span>interesting</span>
              <span>awesome</span>
              <span>incredible</span>
              <span>Creating</span>
              <span>Removing</span> */}
              {/* Creating Websites.',
                  ' Creating Mobile Applications.',
                  ' Designing UI/UX. */}
              {/* <div className="words">
                <span>fantastic</span>
                <span>interesting</span>
                <span>awesome</span>
                <span>incredible</span>
                <span>fantastic</span>
              </div> */}
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

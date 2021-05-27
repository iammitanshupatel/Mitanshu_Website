const Education = () => (
  <>
    <section id="Education">
      <div className="srvContainer">
        <div className="secDesc">
          <h1>Education</h1>
          <div className="p2">
            <h2>What I am</h2>
          </div>
        </div>
        <div className="eduRow">
          <div className="eduLeft">
            <div className="eduText">
              <p>
                I am a Javascript developer and love working with new technology. I do full-stack
                development to deliver a great end to end solution focused on user experience My
                Main focus these days is React Native, Flutter, performance, type system, and code
                architecture. I am a frequent speaker, run workshops, and like contributing to the
                community.
              </p>
              <p>
                <a href="/AboutPage">Checkout my resume</a>
              </p>
            </div>
          </div>
          <div className="eduRight">
            <div className="progressWrap eduWrap">
              <h4>React JS</h4>
              <div className="progress eduWrap">
                <div className="progressBar" style={{ width: '75%' }}>
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="progressWrap eduWrap">
              <h4>React Native</h4>
              <div className="progress eduWrap">
                <div className="progressBar" style={{ width: '65%' }}>
                  <span>65%</span>
                </div>
              </div>
            </div>
            <div className="progressWrap eduWrap">
              <h4>Tailwind CSS</h4>
              <div className="progress eduWrap">
                <div className="progressBar" style={{ width: '80%' }}>
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="progressWrap eduWrap">
              <h4>Strapi</h4>
              <div className="progress eduWrap">
                <div className="progressBar" style={{ width: '70%' }}>
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="separated" />
  </>
);

export default Education;

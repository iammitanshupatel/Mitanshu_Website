const AboutPageContent = ({ data }) => (
  <>
    <div id="scrollHere" />
    <div className="boxAnimate animated containerCtc textWidget separatedTop">
      <div className="abtWrap">
        <h3>Bio.</h3>
        <p>{data.biography}</p>
      </div>
    </div>
    <div className="separated" />
    <div className="boxAnimate animated containerCtc textWidget">
      <div className="abtWrap">
        <h3>Education.</h3>
        <div className="flexCol">
            {data.educations.map(x=>(
                <span className="date">{data.educations.startDate}</span>
          <div className="expInfo">
            <h2>Bachelor in Computer Engineering</h2>
            <a href="https://www.gtu.ac.in/">Gujarat Technological University</a>
            <p>Currently achieving B.E in Computer Engineering.</p>
          </div>
            ))}
          
        </div>
      </div>
    </div>
    <div className="separated" />
    <div className="boxAnimate animated containerCtc textWidget">
      <div className="abtWrap">
        <h3>Experience.</h3>
        <div className="flexCol">
          <span className="date">2020 - Present</span>
          <div className="expInfo">
            <h2>Full-Stack Developer</h2>
            <a href="#">The-Special-Character-IT-Services</a>
            <p>
              Work with development teams and product managers to ideate software solutions, design
              client-side and server-side architecture, build the front-end of applications through
              appealing visual design, develop and manage well-functioning databases and
              applications and write effective APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="separated" />
    <div className="boxAnimate animated containerCtc textWidget separatedBottom">
      <div className="abtWrap">
        <h3>Technologies known.</h3>
        <div className="flexRow">
          <div className="progressWrap">
            <h4>React JS</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '75%' }}>
                <span>75%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>React Native</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '65%' }}>
                <span>65%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>Tailwind CSS</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '80%' }}>
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>Strapi</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '70%' }}>
                <span>70%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>Next JS</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '70%' }}>
                <span>70%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>PostgreSQL</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '60%' }}>
                <span>60%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>HTML:5/ CSS:3</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '90%' }}>
                <span>90%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>Javascript ES6</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '85%' }}>
                <span>85%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>Sass</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '85%' }}>
                <span>85%</span>
              </div>
            </div>
          </div>
          <div className="progressWrap">
            <h4>Vue JS</h4>
            <div className="progress">
              <div className="progressBar" style={{ width: '40%' }}>
                <span>40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default AboutPageContent;

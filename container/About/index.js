const About = ({ data }) => (
  <>
    <section id="About" className="section">
      <div className="abtContainer">
        <div className="abtRow">
          <div className="abtImg">
            <img src="/image/cover_bg_2.jpg" alt="" />
          </div>
          <div className="abtTxt">
            <div className="abtDesc">
              <h1>{data.header.title}</h1>
              <div className="p3">
                <h2>{data.header.caption}</h2>
                <p>{data.biography}</p>
                <p>
                  <a href="/ContactPage">Contact me</a>
                </p>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
    <div className="separated" />
  </>
);

export default About;

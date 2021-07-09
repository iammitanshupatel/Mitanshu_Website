const Education = ({ data }) => (
  <>
    <section id="Education">
      <div className="srvContainer">
        <div className="secDesc">
          <h1>{data.Header.title}</h1>
          <div className="p2">
            <h2>{data.Header.caption}</h2>
          </div>
        </div>
        <div className="eduRow">
          <div className="eduLeft">
            <div className="eduText">
              <p>{data.eduTextForHome}</p>
              <p>
                <a href="/AboutPage">Checkout my resume</a>
              </p>
            </div>
          </div>
          <div className="eduRight">
            {data.skills.map(x => (
              <div key={x.id} className="progressWrap eduWrap">
                <h4>
                  <a href={x.link} target="_blank" rel="noreferrer">
                    {x.title}
                  </a>
                </h4>
                <div className="progress eduWrap">
                  <div className="progressBar" style={{ width: `${x.rating}%` }}>
                    <span>{`${x.rating}%`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div className="separated" />
  </>
);

export default Education;

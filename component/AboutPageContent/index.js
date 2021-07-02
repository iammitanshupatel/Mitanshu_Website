const AboutPageContent = ({ data }) => (
  <>
    <div className="separated" />
    <div className="boxAnimate animated containerCtc textWidget">
      <div className="abtWrap">
        <h3>Education.</h3>
        <div className="flexCol">
          {data.educations.map(x => (
            <>
              <span className="date">{`${x.startDate} - ${x.endDate}`}</span>
              <div className="expInfo">
                <h2>{x.degree}</h2>
                <a href={x.instituteLink} target="_blank" rel="noreferrer">
                  {x.institute}
                </a>
                <p>{x.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    <div className="separated" />
    <div className="boxAnimate animated containerCtc textWidget">
      <div className="abtWrap">
        <h3>Experience.</h3>
        <div className="flexCol">
          {data.experiences.map(x => (
            <>
              <span className="date">{`${x.startDate} - ${x.endDate}`}</span>
              <div className="expInfo">
                <h2>{x.role}</h2>
                <a href={x.companyLink}>{x.companyName}</a>
                <p>{x.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    <div className="separated" />
    <div className="boxAnimate animated containerCtc textWidget separatedBottom">
      <div className="abtWrap">
        <h3>Technologies known.</h3>
        <div className="flexRow">
          {data.skills.map(x => (
            <div className="progressWrap">
              <h4>
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.title}
                </a>
              </h4>
              <div className="progress">
                <div className="progressBar" style={{ width: `${x.rating}%` }}>
                  <span>{`${x.rating}%`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
export default AboutPageContent;

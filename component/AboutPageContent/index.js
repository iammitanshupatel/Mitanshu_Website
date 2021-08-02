import { Fragment } from 'react';
import styles from './aboutPageContent.module.scss';
import common from 'styles/common.module.scss';

const AboutPageContent = ({ data }) => (
  <>
    <div className={common.separated} />
    <div className={`${common.containerCtc} ${common.textWidget} `}>
      <div className={common.abtWrap}>
        <h2>Technologies known.</h2>
        <div className={styles.flexRow}>
          {data?.skills?.map(x => (
            <div className={common.progressWrap} key={x.id}>
              <h3>
                <a href={x.link} aria-label="Skill Name" target="_blank" rel="noreferrer">
                  {x.title}
                </a>
              </h3>
              <div className={common.progress}>
                <div className={common.progressBar} style={{ width: `${x.rating}%` }}>
                  <span>{`${x.rating}%`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={common.separated} />
    <div className={`${common.containerCtc} ${common.textWidget}`}>
      <div className={common.abtWrap}>
        <h2>Education.</h2>
        <div className={styles.flexCol}>
          {data?.educations?.map(x => (
            <Fragment key={x.id}>
              <span className={styles.date}>{`${x.startDate} - ${x.endDate}`}</span>
              <div className={styles.expInfo}>
                <h3>{x.degree}</h3>
                <a
                  href={x.instituteLink}
                  aria-label="Institute Name"
                  target="_blank"
                  rel="noreferrer">
                  {x.institute}
                </a>
                <p>{x.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
    <div className={common.separated} />
    <div className={`${common.containerCtc} ${common.textWidget} ${styles.separatedBottom}`}>
      <div className={common.abtWrap}>
        <h2>Experience.</h2>
        <div className={styles.flexCol}>
          {data?.experiences?.map(x => (
            <Fragment key={x.id}>
              <span className={styles.date}>{`${x.startDate} - ${x.endDate}`}</span>
              <div className={styles.expInfo}>
                <h3>{x.role}</h3>
                <a href={x.companyLink} target="_blank" aria-label="Company Name" rel="noreferrer">
                  {x.companyName}
                </a>
                <p>{x.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </>
);
export default AboutPageContent;

import { Fragment } from 'react';
import styles from './aboutPageContent.module.scss';
import common from '../../common-styles/common.module.scss';

const AboutPageContent = ({ data }) => (
  <>
    <div className={common.separated} />
    <div className={`${common.containerCtc} ${common.textWidget} ${styles.separatedBottom}`}>
      <div className={common.abtWrap}>
        <h3>Technologies known.</h3>
        <div className={styles.flexRow}>
          {data.skills.map(x => (
            <div className={common.progressWrap} key={x.id}>
              <h4>
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.title}
                </a>
              </h4>
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
        <h3>Education.</h3>
        <div className={styles.flexCol}>
          {data.educations.map(x => (
            <Fragment key={x.id}>
              <span className={styles.date}>{`${x.startDate} - ${x.endDate}`}</span>
              <div className={styles.expInfo}>
                <h2>{x.degree}</h2>
                <a href={x.instituteLink} target="_blank" rel="noreferrer">
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
    <div className={`${common.containerCtc} ${common.textWidget}`}>
      <div className={common.abtWrap}>
        <h3>Experience.</h3>
        <div className={styles.flexCol}>
          {data.experiences.map(x => (
            <Fragment key={x.id}>
              <span className={styles.date}>{`${x.startDate} - ${x.endDate}`}</span>
              <div className={styles.expInfo}>
                <h2>{x.role}</h2>
                <a href={x.companyLink}>{x.companyName}</a>
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

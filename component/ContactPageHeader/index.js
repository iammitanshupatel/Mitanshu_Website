import styles from './contactPageHeader.module.scss';
import common from '../../styles/common.module.scss';

const ContactPageHeader = ({ data }) => (
  <>
    <div className={styles.dataScroll} />
    <div className={styles.pageHeader}>
      <span className={styles.little}> {data.header}</span>
      <h1 className={styles.title}>{data.bigHeader}</h1>
    </div>
    <div className={`${styles.top60} ${common.txc}`}>
      <h2>{data.description}</h2>
    </div>
  </>
);

export default ContactPageHeader;

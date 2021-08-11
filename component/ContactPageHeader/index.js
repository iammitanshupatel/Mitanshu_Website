import styles from './contactPageHeader.module.scss';
import common from 'styles/common.module.scss';
import useMarkdown from 'hooks/useMarkdown';

const ContactPageHeader = ({ data }) => {
  const { HTML } = useMarkdown(data?.description);
  return (
    <>
      <div className={styles.dataScroll} />
      <div className={styles.pageHeader}>
        <span className={styles.little}> {data?.header}</span>
        <h1 className={styles.title}>{data?.bigHeader}</h1>
      </div>
      <div
        className={`${styles.top60} ${common.txc}`}
        dangerouslySetInnerHTML={{ __html: HTML }}></div>
    </>
  );
};

export default ContactPageHeader;

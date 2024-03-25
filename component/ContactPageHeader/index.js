import Head from 'next/head';
import styles from './contactPageHeader.module.scss';
import common from 'styles/common.module.scss';
import useMarkdown from 'hooks/useMarkdown';
import fetchMeta from 'component/MetaTags';

const ContactPageHeader = ({ data }) => {
  const { HTML } = useMarkdown(data?.description);
  return (
    <>
      <Head>
        {fetchMeta({
          title: 'Contact Page - Mitanshu Patel',
          description: data?.description,
        })}
      </Head>
      <div className={styles.dataScroll} />
      <div className={styles.pageHeader}>
        <span className={styles.little}> {data?.header}</span>
        <h1 className={styles.title}>{data?.bigHeader}</h1>
      </div>
      <div
        className={`${styles.top60} ${common.txc}`}
        dangerouslySetInnerHTML={{ __html: data.description || HTML }}
      />
    </>
  );
};

export default ContactPageHeader;

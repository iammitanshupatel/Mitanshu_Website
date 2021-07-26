import styles from './singleBlogPageContent.module.scss';
import common from '../../styles/common.module.scss';
import Head from 'next/head';
import useMarkdown from '../../hooks/useMarkdown';
import Image from 'next/image';

const SingleBlogPageContent = ({ data }) => {
  const { HTML } = useMarkdown(data.description);
  (function () {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
        links[i].target = '_blank';
      }
    }
  })();
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <section className={common.singleBlog}>
        <div className={common.blogInfo}>
          <div className={common.datenauthor}>
            <p>{data.date}</p>
            <span>
              <a href="#!" aria-label="admin">
                admin
              </a>
            </span>
          </div>
          <h2 className={common.blogTitle}>{data.title}</h2>
        </div>
        <img src={data.blogImage.url} className={common.blogImg} alt="blogImage" />
      </section>
      <article
        className={styles.singleBlogTxt}
        dangerouslySetInnerHTML={{ __html: HTML }}></article>
      <div className={styles.tagLinks}>
        {data?.tags?.map(tag => (
          <a
            aria-label="View more about tag"
            key={tag.id}
            href={tag.url}
            target="_blank"
            rel="noreferrer">
            {tag.title}
          </a>
        ))}
      </div>
      <section className={styles.nextContent}>
        <p className={styles.linkSubtitle}>Next Content</p>
        <p className={styles.linkTitle}>
          <a aria-label="Go to next blog" href={`${data.id + 1}`}>
            {data.title}
          </a>
        </p>
      </section>
    </>
  );
};

export default SingleBlogPageContent;

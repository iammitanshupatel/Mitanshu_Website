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
              <a href="#!">admin</a>
            </span>
          </div>
          <h2 className={common.blogTitle}>{data.title}</h2>
        </div>
        <img src={data.blogImage.url} className={common.blogImg} alt="blog-image" />
      </section>
      <article
        className={styles.singleBlogTxt}
        dangerouslySetInnerHTML={{ __html: HTML }}></article>
      <div className={styles.tagLinks}>
        {data?.tags?.map(tag => (
          <a key={tag.id} href={tag.url} target="_blank" rel="noreferrer">
            {tag.title}
          </a>
        ))}
      </div>
      <section className={styles.nextContent}>
        <p className={styles.linkSubtitle}>Next Content</p>
        <p className={styles.linkTitle}>
          <a href={`${data.id + 1}`}> {data.title}</a>
        </p>
      </section>
    </>
  );
};

export default SingleBlogPageContent;

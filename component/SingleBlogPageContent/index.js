import styles from './singleBlogPageContent.module.scss';
import common from '../../styles/common.module.scss';
import Head from 'next/head';

const SingleBlogPageContent = ({ data }) => (
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
      <img src="/image/Blogs/img-6.jpg" alt="" className={common.blogImg} />
    </section>
    <article className={styles.singleBlogTxt}>
      <p>{data.description}</p>
      <div>
        {data?.tags?.map(tag => (
          <a key={tag.id} href={tag.url} target="_blank" rel="noreferrer">
            {tag.title}
          </a>
        ))}
      </div>
    </article>
    <section className={styles.nextContent}>
      <p className={styles.linkSubtitle}>Next Content</p>
      <p className={styles.linkTitle}>
        <a href={`${data.id + 1}`}> {data.title}</a>
      </p>
    </section>
  </>
);

export default SingleBlogPageContent;

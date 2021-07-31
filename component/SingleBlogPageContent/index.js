import styles from './singleBlogPageContent.module.scss';
import common from '../../styles/common.module.scss';
import Head from 'next/head';
import useMarkdown from '../../hooks/useMarkdown';
import {
  Image as CloudImage,
  Video,
  Transformation,
  CloudinaryContext,
  Placeholder,
} from 'cloudinary-react';
import Image from 'next/image';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const SingleBlogPageContent = ({ data }, { title }) => {
  console.log(title);
  const { HTML } = useMarkdown(data.description);
  const url = data.blogImage.url.replace('upload', 'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto');
  return (
    <>
      <Head>
        <title>{`${data.title} - Mitanshu Patel`}</title>
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
        <div className={common.blogImgDiv}>
          <CloudImage
            cloudName="mitanshucloud"
            publicId={data.blogImage?.provider_metadata?.public_id}
            dpr="auto"
            responsive
            className={common.blogImg}
            width="auto"
            crop="scale"
            responsiveUseBreakpoints="true"
            quality="auto"
            loading="lazy"
            fetchFormat="auto">
            <Placeholder type="vectorize" />
          </CloudImage>
        </div>
      </section>
      <article
        className={styles.singleBlogTxt}
        dangerouslySetInnerHTML={{
          __html: HTML.replace(/href/g, "target='_blank' href"),
        }}></article>
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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}graphql`,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query getTitle {
        blogs(where: { id: 2 }) {
          id
          title
        }
      }
    `,
  });
  return {
    props: {
      title: data.blogs.title,
    },
  };
}

export default SingleBlogPageContent;

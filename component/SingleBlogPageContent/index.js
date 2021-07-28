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
import { useEffect, useLayoutEffect } from 'react';

const SingleBlogPageContent = ({ data }) => {
  const { HTML } = useMarkdown(data.description);
  //   (function () {
  //     var links = document.getElementsByTagName('a');
  //     for (var i = 0; i < links.length; i++) {
  //       if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
  //         links[i].target = '_blank';
  //       }
  //     }
  //   })();
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
      links[i].target = '_blank';
    }
  }

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
        <div className={common.blogImgDiv}>
          {/* <Image src={data.blogImage.url} className={common.blogImg} alt="blogImage" layout="fill"> */}
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
          {/* </Image> */}
        </div>
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

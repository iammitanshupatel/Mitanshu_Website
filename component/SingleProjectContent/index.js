import styles from './singleProjectContent.module.scss';
import common from 'styles/common.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import useProgressiveImage from 'hooks/useProgressiveImage';
import { useCallback, useEffect, useRef } from 'react';
import useMarkdown from 'hooks/useMarkdown';
import fetchMeta from 'component/Meta';

const SingleProjectContent = ({ data }) => {
  const { HTML } = useMarkdown(data?.description);
  const url = data?.displayImage?.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
  );

  const parentDivRef = useRef(null);
  const intervalRef = useRef();
  const cardRef = useRef([]);

  const startScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      const cardWidth = cardRef?.current?.[0]?.offsetWidth;
      const total = parentDivRef?.current?.scrollLeft + parentDivRef?.current?.offsetWidth;
      if (Math.round(total) === parentDivRef?.current?.scrollWidth) {
        parentDivRef.current.scrollLeft = 0;
      } else {
        parentDivRef.current.scrollLeft += cardWidth;
      }
    }, 2000);
  }, []);

  const stopScroll = useCallback(() => {
    clearInterval(intervalRef?.current);
  }, []);

  useEffect(() => {
    const instance = parentDivRef?.current;
    startScroll();
    instance?.addEventListener('mouseover', stopScroll);
    instance?.addEventListener('mouseout', startScroll);
    return () => {
      stopScroll();
      instance?.removeEventListener('mouseover', stopScroll);
      instance?.removeEventListener('mouseout', startScroll);
    };
  }, [startScroll, stopScroll]);
  return (
    <>
      <Head>
        {fetchMeta({
          title: `${data?.title} - Mitanshu Patel`,
          keywords: `${data?.title}, ${data?.typeOfPortfolio}, ${data?.technologyUsed
            ?.map(tech => tech?.title)
            ?.join(', ')}`,
          description: `${data?.title} developed by Mitanshu Patel`,
        })}
      </Head>
      <section className={common.singleBlog}>
        <div className={`${common.blogInfo} ${styles.textCenter}`}>
          <h2 className={common.blogTitle}>{data?.title}</h2>
        </div>
      </section>
      <section className={styles.projectDesc}>
        <div ref={parentDivRef} className={styles.imgDiv}>
          {data?.projectImage?.map((y, i) => {
            return (
              <img
                loading="lazy"
                ref={el => {
                  cardRef.current[i] = el;
                }}
                key={y?.id}
                src={y?.image?.url}
                alt={y?.image?.name}
              />
            );
          })}
        </div>
        <div className={styles.desc}>
          <div className={styles.singleProjectTxt}>
            <h3>Description</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: HTML,
              }}></div>
          </div>
          <div className={styles.singleProjectTxt}>
            <h3>Type</h3>
            <p>{data?.typeOfPortfolio}</p>
          </div>
          <div className={styles.singleProjectTxt}>
            <h3>Role</h3>
            <p>{data?.role}</p>
          </div>
          {data?.link && (
            <div className={styles.singleProjectTxt}>
              <h3>Link</h3>
              <a className={styles.link} href={data?.link} target="_blank" rel="noreferrer">
                {data?.link}
              </a>
            </div>
          )}
          {data?.playStoreLink && (
            <div className={styles.singleProjectTxt}>
              <h3>Play Store Link</h3>
              <a
                className={styles.link}
                href={data?.playStoreLink}
                target="_blank"
                rel="noreferrer">
                {data?.playStoreLink}
              </a>
            </div>
          )}
          {data?.appStoreLink && (
            <div className={styles.singleProjectTxt}>
              <h3>App Store Link</h3>
              <a className={styles.link} href={data?.appStoreLink} target="_blank" rel="noreferrer">
                {data?.appStoreLink}
              </a>
            </div>
          )}
          <div className={styles.singleProjectTxt}>
            <h3>Technology Used</h3>
            {data?.technologyUsed?.map(x => (
              <a
                aria-label={`{View more about ${x?.title} technology}`}
                key={x?.id}
                href={x?.url}
                target="_blank"
                rel="noreferrer">
                {x?.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProjectContent;

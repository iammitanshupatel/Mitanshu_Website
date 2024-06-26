import styles from './singleProjectContent.module.scss';
import common from 'styles/common.module.scss';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import useMarkdown from 'hooks/useMarkdown';

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
      <NextSeo
        title={`${data?.title} | Mitanshu Patel`}
        description={`${data?.title} developed by Mitanshu Patel`}
      />
      <section className={common.singleBlog}>
        <div className={`${common.blogInfo} ${styles.textCenter}`}>
          <h1 className={common.blogTitle}>{data?.title}</h1>
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
            <h2>Description</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: HTML,
              }}></div>
          </div>
          <div className={styles.singleProjectTxt}>
            <h2>Type</h2>
            <p>{data?.typeOfPortfolio}</p>
          </div>
          <div className={styles.singleProjectTxt}>
            <h2>Role</h2>
            <p>{data?.role}</p>
          </div>
          {data?.link && (
            <div className={styles.singleProjectTxt}>
              <h2>Link</h2>
              <a className={styles.link} href={data?.link} target="_blank" rel="noreferrer">
                {data?.link}
              </a>
            </div>
          )}
          {data?.playStoreLink && (
            <div className={styles.singleProjectTxt}>
              <h2>Play Store Link</h2>
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
              <h2>App Store Link</h2>
              <a className={styles.link} href={data?.appStoreLink} target="_blank" rel="noreferrer">
                {data?.appStoreLink}
              </a>
            </div>
          )}
          <div className={styles.singleProjectTxt}>
            <h2>Technology Used</h2>
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

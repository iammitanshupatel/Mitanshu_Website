import { useCallback, useEffect, useRef } from 'react';
import Button from '../../component/Button';
import Card from '../../component/Card';
import styles from './blogs.module.scss';
import common from '../../styles/common.module.scss';
import Image from 'next/image';
import imgSource from '../../public/image/Blogs/img-1.jpg';

const Blogs = ({ data }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${imgSource}?/w=${width}&q=${quality || 75}`;
  };
  const sliderRef = useRef();
  //   const mouseEvent = useCallback(() => {}, []);
  useEffect(() => {
    const changeScroll = () => {
      if (sliderRef.current.scrollLeft < 1500) {
        sliderRef.current.scrollLeft += 300;
        console.log(sliderRef.current.scrollLeft);
      }
    };
    // const int = setInterval(changeScroll, 2000);
    // sliderRef.current.addEventListener('mouseover', () => {
    //   clearInterval(int);
    // });
    // sliderRef.current.removeEventListener('mouseover', () => {
    //   setInterval(changeScroll, 2000);
    // });
  }, []);

  return (
    <>
      <section id="Blogs" className={styles.blogsSection}>
        <div className={common.srvContainer}>
          <div className={common.srvCol}>
            <div className={common.secDesc}>
              <h1>{data.Header.title}</h1>
              <div className={common.p2}>
                <h2>{data.Header.caption}</h2>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div id="sliderModal" ref={sliderRef} className={styles.sliderShow}>
              {data?.blogs?.map(x => (
                <Card key={x.id} variant="cardBlog">
                  <Image src={x.blogImage.url} alt="Blog Image" width={320} height={213} />
                  <div className={common.blogPageContent}>
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <div className={common.blogPageMeta}>
                      <span className={common.more}>
                        <a aria-label="View more blogs" href={`blog/${x.id}`}>
                          Read More
                        </a>
                      </span>
                      <span className={common.date}>{x.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button btnText="Load More" ariaLabel="More blogs" locationPage="/blog" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
const Button = dynamic(() => import('component/Button'));
const Card = dynamic(() => import('component/Card'));
import styles from './blogs.module.scss';
import common from 'styles/common.module.scss';

const Blogs = ({ data }) => {
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
                  <a aria-label="View more about the blog" href={`blog/${x.id}`}>
                    <Image
                      src={x.blogImage.url.replace(
                        'upload',
                        'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                      )}
                      alt="Blog Image"
                      width={320}
                      height={213}
                    />
                  </a>
                  <div className={common.blogPageContent}>
                    <h2>{x.title}</h2>
                    <p>{x.description}</p>
                    <div className={common.blogPageMeta}>
                      <span className={common.more}>
                        <a aria-label="View more blogs" href={`blog/${x.id}`}>
                          Read this blog
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

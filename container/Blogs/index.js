import { useCallback, useEffect, useRef } from 'react';
import Button from '../../component/Button';
import Card from '../../component/Card';

const Blogs = () => {
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
      <section id="Blogs">
        <div className="srvContainer">
          <div className="srvCol">
            <div className="secDesc">
              <h1>Blogs</h1>
              <div className="p2">
                <h2>What I Think</h2>
              </div>
            </div>
          </div>
          <div className="items">
            <div id="sliderModal" ref={sliderRef} className="sliderShow">
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>The best of web design and web design inspiration</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first
                    </p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
            </div>
            <Button btnText="Load More" locationPage="/BlogPage" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

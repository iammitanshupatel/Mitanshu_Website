import { useEffect, useRef } from 'react';
import Card from '../../component/Card';

const BlogPage = () => {
  const modalRef = useRef();
  const btnClick = () => {
    modalRef.current.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };
  useEffect(() => {
    window.onclick = function windowClick(event) {
      if (event.target === modalRef.current) {
        modalRef.current.style.display = 'none';
        document.body.style.overflow = 'visible';
      }
    };
  }, []);

  return (
    <>
      <div className="fullImage hero me">
        <div className="fullText">
          <div className="outer">
            <div className="inner">
              <h1>Blogs I Write</h1>
            </div>
            <a href="#scrollHere" className="mouse-wrap justifyCenter">
              <span className="mouse">
                <span className="scroll" />
              </span>
              <span className="mouse-label">Scroll</span>
            </a>
          </div>
        </div>
        <div className="blogImgOverlay" />
      </div>
      <div id="scrollHere" />
      <div className="speratedWithoutImg">
        <div className="srvContainer">
          <div className="srvCol">
            <div className="cardRow gap1rem">
              <Card variant="cardBlog">
                <a href="#">
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
                        <a href="#">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="#">
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
                        <a href="#">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
              <Card variant="cardBlog">
                <a href="#">
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
                        <a href="#">Read More</a>
                      </span>
                      <span className="date">16/April/2021</span>
                    </div>
                  </div>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

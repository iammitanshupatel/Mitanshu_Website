import { useCallback, useEffect, useRef } from 'react';
import Button from '../../component/Button';
import Card from '../../component/Card';

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
      <section id="Blogs">
        <div className="srvContainer">
          <div className="srvCol">
            <div className="secDesc">
              <h1>{data.Header.title}</h1>
              <div className="p2">
                <h2>{data.Header.caption}</h2>
              </div>
            </div>
          </div>
          <div className="items">
            <div id="sliderModal" ref={sliderRef} className="sliderShow">
              {data.blogs.map(x => (
                <Card key={x.id} variant="cardBlog">
                  <a href="/SingleBlogPage">
                    <div className="custom">
                      <img src="/image/Blogs/img-1.jpg" alt="" />
                    </div>
                    <div className="blogPageContent">
                      <h3>{x.title}</h3>
                      <p>{x.description}</p>
                      <div className="blogPageMeta">
                        <span className="more">
                          <a href="/SingleBlogPage">Read More</a>
                        </span>
                        <span className="date">{x.date}</span>
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
            <Button btnText="Load More" locationPage="/BlogPage" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

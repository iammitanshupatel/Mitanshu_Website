import Image from 'next/image';
import Slider from 'react-slick';
import Button from '../../component/Button';
import Card from '../../component/Card';

const settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
  initialSlide: 0,
  mobileFirst: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Blogs = () => (
  <>
    <section id="Blogs" className="blogSpacing">
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
          <Card variant="cardBlog">
            <a href="#">
              <div className="custom">
                <img src="/image/Blogs/img-1.jpg" alt="" />
              </div>
              <div className="blogPageContent">
                <h3>The best of web design and web design inspiration</h3>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first
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
    </section>
    <div className="separated" />
  </>
);

export default Blogs;

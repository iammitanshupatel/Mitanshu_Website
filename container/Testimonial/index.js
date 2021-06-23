// // import Slider from 'react-slick';

const Testimonial = ({ items }) => {
  //   const settings = {
  //     dots: true,
  //     speed: 2000,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     pauseOnHover: true,
  //     infinite: false,
  //     autoplay: true,
  //     arrows: false,
  //     appendDots: dots => <ul> {dots} </ul>,
  //     customPaging: i => <div className="slickDotsUp" />,
  //   };

  return (
    <section className="testimonial">
      <div className="testimonialContainer">
        <figure className="slider">
          <div className="containerTest">
            <div className="authorImg">
              <img src="/image/testimonial/img-1.jpg" alt="" />
            </div>
            <h1>Mr XYZ Patel</h1>
            <h5>Manager</h5>
            <p className="description">
              Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe
              asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem
              illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae
              nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta
              temporibus quas!
            </p>
          </div>
          <div className="containerTest">
            <div className="authorImg">
              <img src="/image/testimonial/img-1.jpg" alt="" />
            </div>
            <h1>Mr Mitanshu Patel</h1>
            <h5>Managing Director</h5>
            <p variant="portTestimonialPText" className="description">
              Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe
              asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem
              illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae
              nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta
              temporibus quas!
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;

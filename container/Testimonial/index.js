const Testimonial = ({ data }) => (
  <section className="testimonial">
    <div className="testimonialContainer">
      <figure className="slider">
        {data.testimonials.map(x => (
          <div className="containerTest">
            <div className="authorImg">
              <img src="/image/testimonial/img-1.jpg" alt="" />
            </div>
            <h1>{x.personName}</h1>
            <h5>{x.jobTitle}</h5>
            <p className="description">{x.description}</p>
          </div>
        ))}
      </figure>
    </div>
  </section>
);

export default Testimonial;

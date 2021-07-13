import styles from './testimonial.module.scss';

const Testimonial = ({ data }) => (
  <section className={styles.testimonial}>
    <div className={styles.testimonialContainer}>
      <figure className={styles.slider}>
        {data.testimonials.map(x => (
          <div key={x.id} className={styles.containerTest}>
            <div className={styles.authorImg}>
              <img src="/image/testimonial/img-1.jpg" alt="" />
            </div>
            <h1>{x.personName}</h1>
            <h5>{x.jobTitle}</h5>
            <p className={styles.description}>{x.description}</p>
          </div>
        ))}
      </figure>
    </div>
  </section>
);

export default Testimonial;

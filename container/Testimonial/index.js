import Image from 'next/image';
import styles from './testimonial.module.scss';

const Testimonial = ({ data }) => (
  <section
    style={{ backgroundImage: `url(${data.backgroundImage.url})` }}
    className={styles.testimonial}>
    <div className={styles.testimonialContainer}>
      <figure className={styles.slider}>
        {data?.testimonials?.map(x => (
          <div key={x.id} className={styles.containerTest}>
            <div className={styles.authorImg}>
              <Image src="/image/testimonial/img-1.jpg" width={112} height={112} alt="" />
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

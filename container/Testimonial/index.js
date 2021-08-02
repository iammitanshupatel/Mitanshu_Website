import Image from 'next/image';
import useProgressiveImage from 'hooks/useProgressiveImage';
import styles from './testimonial.module.scss';

const Testimonial = ({ data }) => {
  const urlBanner = data.backgroundImage.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
  );
  const urlPlaceholder = data.backgroundImage.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,w_auto,e_blur:1000,q_1,f_auto/e_grayscale',
  );
  const loaded = useProgressiveImage(urlBanner, urlPlaceholder);
  return (
    <section
      style={{ backgroundImage: `url(${loaded || urlPlaceholder})` }}
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
};

export default Testimonial;

import styles from './singleProjectContent.module.scss';
import common from '../../styles/common.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import useProgressiveImage from '../../hooks/useProgressiveImage';

const SingleProjectContent = ({ data }) => {
  const url = data.displayImage.url.replace(
    'upload',
    'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
  );

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <section className={common.singleBlog}>
        <div className={`${common.blogInfo} ${styles.textCenter}`}>
          <h2 className={common.blogTitle}>{data.title}</h2>
        </div>
      </section>
      <section className={styles.projectDesc}>
        <div className={styles.imgDiv}>
          {data.projectImage.map(y => {
            return <img key={y.id} src={y.image.url} alt="Project Image" />;
          })}
        </div>
        <div className={styles.desc}>
          <div className={styles.singleProjectTxt}>
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
          <div className={styles.singleProjectTxt}>
            <h3>Type</h3>
            <p>{data.typeOfPortfolio}</p>
          </div>
          <div className={styles.singleProjectTxt}>
            <h3>Role</h3>
            <p>{data.role}</p>
          </div>
          <div className={styles.singleProjectTxt}>
            <h3>Technology Used</h3>
            {data?.technologyUsed?.map(x => (
              <a
                aria-label={`{View more about ${x.title} technology}`}
                key={x.id}
                href={x.url}
                target="_blank"
                rel="noreferrer">
                {x.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProjectContent;

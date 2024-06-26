import dynamic from 'next/dynamic';
import Image from 'next/image';
const Card = dynamic(() => import('component/Card'));
const Button = dynamic(() => import('component/Button'));
import styles from './projects.module.scss';
import common from 'styles/common.module.scss';

const Projects = ({ data }) => {
  data?.projects?.data?.sort((a, b) => {
    var dateA = new Date(a.published_at),
      dateB = new Date(b.published_at);
    return dateB - dateA;
  });
  return (
    <>
      <section id="Projects">
        <div className={common.srvContainer}>
          <div className={common.srvCol}>
            <div className={common.secDesc}>
              <h2>{data?.header?.title}</h2>
              <div className={common.p2}>
                <h3>{data?.header?.caption}</h3>
              </div>
            </div>
            <div className={`${common.cardRow} ${styles.paddingB1}`}>
              {data?.projects?.map(x => (
                <Card variant="projectCard" key={x?.id}>
                  <figure>
                    <Image
                      src={x?.displayImage?.url?.replace(
                        'upload',
                        'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                      )}
                      alt={x?.displayImage?.name}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                    <figcaption>
                      <a aria-label={`View more about ${x?.title}`} href={`work/${x?.id}`}>
                        <h2>{x?.title}</h2>
                        <p>{x?.typeOfPortfolio}</p>
                      </a>
                    </figcaption>
                  </figure>
                </Card>
              ))}
            </div>
            <Button btnText="Load More" ariaLabel="More projects" locationPage="/work" />
          </div>
        </div>
      </section>
      <div className={common.separated} />
    </>
  );
};

export default Projects;

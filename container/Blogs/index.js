import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './blogs.module.scss';
import common from 'styles/common.module.scss';

const Button = dynamic(() => import('component/Button'));
const Card = dynamic(() => import('component/Card'));

const Blogs = ({ data }) => {
  const sortedBlogs = data?.blogs?.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section id="Blogs" className={styles.blogsSection}>
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={common.secDesc}>
            <h1>{data?.header.title}</h1>
            <div className={common.p2}>
              <h2>{data?.header?.caption}</h2>
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <div id="sliderModal" className={styles.sliderShow}>
            {sortedBlogs?.map(x => (
              <Card key={x?.id} variant="cardBlog">
                <a aria-label="View more about the blog" href={`blogs/${x?.id}`}>
                  <Image
                    priority
                    src={x?.blogImage?.url.replace(
                      'upload',
                      'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                    )}
                    alt={x?.blogImage?.name}
                    width={320}
                    height={213}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </a>
                <div className={common.blogPageContent}>
                  <h2>{x?.title}</h2>
                  <p>{x?.description}</p>
                  <div className={common.blogPageMeta}>
                    <span className={common.more}>
                      <a aria-label="View more blogs" href={`blogs/${x?.id}`}>
                        Read this blog
                      </a>
                    </span>
                    <span className={common.date}>{x?.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <Button btnText="Load More" ariaLabel="More blogs" locationPage="/blogs" />
      </div>
    </section>
  );
};

export default Blogs;

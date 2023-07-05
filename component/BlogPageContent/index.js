import Image from 'next/image';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('../Card'));
import styles from './blogPageContent.module.scss';
import common from 'styles/common.module.scss';

const BlogPageContent = ({ blogs }) => {
  blogs?.sort((a, b) => {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });
  return (
    <>
      <div id="scrollHere" />
      <div className={common.separatedWithoutImg}>
        <div className={common.srvContainer}>
          <div className={common.srvCol}>
            <div className={`${common.cardRow} ${styles.gap1rem}`}>
              {blogs?.map(x => (
                <Card key={x?.id} variant="cardBlog">
                  <a href={`blog/${x?.id}`} aria-label="View more details about blog">
                    <div className={common.custom}>
                      <Image
                        priority
                        src={x?.blogImage.url.replace(
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
                    </div>
                  </a>
                  <div className={common.blogPageContent}>
                    <h2>{x?.title}</h2>
                    <p>{x?.description}</p>
                    <div className={common.blogPageMeta}>
                      <span className={common.more}>
                        <a href={`blog/${x?.id}`} aria-label="More blogs">
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
        </div>
      </div>
    </>
  );
};

export default BlogPageContent;

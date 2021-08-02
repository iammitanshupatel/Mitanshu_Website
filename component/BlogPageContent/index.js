import { data } from 'remark';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('../Card'));
import styles from './blogPageContent.module.scss';
import common from 'styles/common.module.scss';

const BlogPageContent = ({ blogs }) => (
  <>
    <div id="scrollHere" />
    <div className={common.seperatedWithoutImg}>
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={`${common.cardRow} ${styles.gap1rem}`}>
            {blogs?.map(x => (
              <Card key={x.id} variant="cardBlog">
                <a href={`blog/${x.id}`} aria-label="View more details about blog">
                  <div className={common.custom}>
                    <Image
                      src={x.blogImage.url.replace(
                        'upload',
                        'upload/c_scale,dpr_auto,f_auto,q_auto,w_auto',
                      )}
                      alt=""
                      width={320}
                      height={213}
                    />
                  </div>
                </a>
                <div className={common.blogPageContent}>
                  <h2>{x.title}</h2>
                  <p>{x.description}</p>
                  <div className={common.blogPageMeta}>
                    <span className={common.more}>
                      <a href={`blog/${x.id}`} aria-label="More blogs">
                        Read this blog
                      </a>
                    </span>
                    <span className={common.date}>{x.date}</span>
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

export default BlogPageContent;

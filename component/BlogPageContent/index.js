import { data } from 'remark';
import Card from '../Card';
import styles from './blogPageContent.module.scss';
import common from '../../styles/common.module.scss';
import Image from 'next/image';

const BlogPageContent = ({ blogs }) => (
  <>
    <div id="scrollHere" />
    <div className={common.seperatedWithoutImg}>
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={`${common.cardRow} ${styles.gap1rem}`}>
            {blogs?.map(x => (
              <Card key={x.id} variant="cardBlog">
                <a href={`blog/${x.id}`}>
                  <div className={common.custom}>
                    <Image src={x.blogImage.url} alt="" width={320} height={213} />
                  </div>
                  <div className={common.blogPageContent}>
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <div className={common.blogPageMeta}>
                      <span className={common.more}>
                        <a href={`blog/${x.id}`}>Read More</a>
                      </span>
                      <span className={common.date}>{x.date}</span>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BlogPageContent;

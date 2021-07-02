import { data } from 'remark';
import Card from '../Card';

const BlogPageContent = ({ data }) => (
  <>
    <div id="scrollHere" />
    <div className="speratedWithoutImg">
      <div className="srvContainer">
        <div className="srvCol">
          <div className="cardRow gap1rem">
            {data.blogs.map(x => (
              <Card variant="cardBlog">
                <a href="/SingleBlogPage">
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href="/SingleBlogPage">Read More</a>
                      </span>
                      <span className="date">{x.date}</span>
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

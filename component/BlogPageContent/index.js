import { data } from 'remark';
import Card from '../Card';

const BlogPageContent = ({ blogs }) => (
  <>
    <div id="scrollHere" />
    <div className="seperatedWithoutImg">
      <div className="srvContainer">
        <div className="srvCol">
          <div className="cardRow gap1rem">
            {blogs.map(x => (
              <Card key={x.id} variant="cardBlog">
                <a href={`blog/${x.id}`}>
                  <div className="custom">
                    <img src="/image/Blogs/img-1.jpg" alt="" />
                  </div>
                  <div className="blogPageContent">
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <div className="blogPageMeta">
                      <span className="more">
                        <a href={`blog/${x.id}`}>Read More</a>
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

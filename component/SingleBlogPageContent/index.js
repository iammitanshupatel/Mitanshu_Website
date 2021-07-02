import React from 'react';

const SingleBlogPageContent = ({ data }) => (
  <>
    {data.blogs.map(x => (
      <>
        <section className="singleBlog">
          <div className="blogInfo">
            <div className="datenauthor">
              <p>{x.date}</p>
              <span>
                <a href="#!">admin</a>
              </span>
            </div>
            <h2 className="blogTitle">{x.title}</h2>
          </div>
          <img src="/image/Blogs/img-6.jpg" alt="" className="blogImg" />
        </section>
        <article className="singleBlogTxt">
          <p>{x.description}</p>
        </article>
        <section className="nextContent">
          <p className="link-subtitle">Next Content</p>
          <p className="link-title">
            Court nay merit few nor party learn. Why our year her eyes know even how
          </p>
        </section>
      </>
    ))}
  </>
);

export default SingleBlogPageContent;

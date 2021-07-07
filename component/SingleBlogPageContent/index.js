import React from 'react';

const SingleBlogPageContent = ({ data }) => (
  <>
    <section className="singleBlog">
      <div className="blogInfo">
        <div className="datenauthor">
          <p>{data.date}</p>
          <span>
            <a href="#!">admin</a>
          </span>
        </div>
        <h2 className="blogTitle">{data.title}</h2>
      </div>
      <img src="/image/Blogs/img-6.jpg" alt="" className="blogImg" />
    </section>
    <article className="singleBlogTxt">
      <p>{data.description}</p>
      <div>
        {data.tags.map(tag => (
          <a key={tag.id} href={tag.url} target="_blank" rel="noreferrer">
            {tag.title}
          </a>
        ))}
      </div>
    </article>
    <section className="nextContent">
      <p className="link-subtitle">Next Content</p>
      <p className="link-title">
        <a href={`${data.id + 1}`}> {data.title}</a>
      </p>
    </section>
  </>
);

export default SingleBlogPageContent;

const SingleProjectContent = ({ data }) => (
  <>
    <section className="singleBlog">
      <div className="blogInfo textCenter">
        <h2 className="blogTitle">{data.title}</h2>
      </div>
    </section>
    <section className="projectDesc">
      <img src="/image/Blogs/img-6.jpg" alt="" />
      <div className="desc">
        <div className="singleProjectTxt">
          <h3>Description</h3>
          <p>{data.description}</p>
        </div>
        <div className="singleProjectTxt">
          <h3>Type</h3>
          <p>{data.typeOfPortfolio}</p>
        </div>
        <div className="singleProjectTxt">
          <h3>Role</h3>
          <p>{data.role}</p>
        </div>
        <div className="singleProjectTxt">
          <h3>Technology Used</h3>
          {data?.technologyUsed?.map(x => (
            <a key={x.id} href={x.url} target="_blank" rel="noreferrer">
              {x.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default SingleProjectContent;

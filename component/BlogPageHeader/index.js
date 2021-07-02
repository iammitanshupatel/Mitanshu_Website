import React from 'react';

const BlogPageHeader = ({ data }) => (
  <div className="fullImage hero me">
    <div className="fullText">
      <div className="outer">
        <div className="inner">
          <h1>{data.blogPageHeader}</h1>
        </div>
        <a href="#scrollHere" className="mouse-wrap justifyCenter">
          <span className="mouse">
            <span className="scroll" />
          </span>
          <span className="mouse-label">Scroll</span>
        </a>
      </div>
    </div>
    <div className="blogImgOverlay" />
  </div>
);

export default BlogPageHeader;

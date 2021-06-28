const FullImageHeaderPage = ({ data }) => (
  <div className="fullImage hero me">
    <div className="fullText">
      <div className="outer">
        <div className="inner">
          <span>{data.roleOfAdmin}</span>
          <h1>{data.adminName}</h1>
        </div>
        <a href="#scrollHere" className="mouse-wrap justifyCenter">
          <span className="mouse">
            <span className="scroll" />
          </span>
          <span className="mouse-label">Scroll</span>
        </a>
      </div>
    </div>
    <div className="imgOverlay" />
  </div>
);

export default FullImageHeaderPage;

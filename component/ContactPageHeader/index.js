const ContactPageHeader = ({ data }) => (
  <>
    <div className="dataScroll" />
    <div className="pageHeader">
      <span className="little"> {data.header}</span>
      <h1 className="title">{data.bigHeader}</h1>
    </div>
    <div className="top60 txc">
      <h2>{data.description}</h2>
    </div>
  </>
);

export default ContactPageHeader;

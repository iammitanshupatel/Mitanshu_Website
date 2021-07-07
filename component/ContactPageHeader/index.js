const ContactPageHeader = ({ data }) => (
  <>
    {console.log(data)}
    <div className="dataScroll" />
    <div className="pageHeader">
      <span className="little"> Contact me</span>
      <h1 className="title">Let's talk</h1>
    </div>
    <div className="top60 txc">
      <h2>
        Like what you see? Have a project you’d like to talk about? <br /> Want to ask me a personal
        question?
      </h2>
    </div>
  </>
);

export default ContactPageHeader;

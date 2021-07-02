import ReactRotatingText from 'react-rotating-text';
import useMarkdown from '../../hooks/useMarkdown';

const Home = ({ data }) => {
  const { HTML } = useMarkdown(data.description);
  return (
    <>
      <section className="imgCover">
        <div className="homeContainer">
          <div className="homeWrap">
            <div className="homeTxt" dangerouslySetInnerHTML={{ __html: HTML }} />
            {/* <h1>{`${data.firstName} ${data.lastName}`}</h1>
            <h2>
              {data.description}
              <ReactRotatingText
                items={[
                  `${data.banner_spans.find(x => x.id === 5).name}`,
                  `${data.banner_spans.find(x => x.id === 6).name}`,
                  `${data.banner_spans.find(x => x.id === 7).name}`,
                ]}
              /> */}
            {/* <span>fantastic</span>
              <span>interesting</span>
              <span>awesome</span>
              <span>incredible</span>
              <span>Creating</span>
              <span>Removing</span> */}
            {/* Creating Websites.',
                  ' Creating Mobile Applications.',
                  ' Designing UI/UX. */}
            {/* <div className="words">
                <span>fantastic</span>
                <span>interesting</span>
                <span>awesome</span>
                <span>incredible</span>
                <span>fantastic</span>
              </div> */}
            {/* </h2> */}
          </div>
        </div>
        <a href="#About" className="mouse-wrap">
          <span className="mouse">
            <span className="scroll" />
          </span>
          <span className="mouse-label">Scroll</span>
        </a>
      </section>
    </>
  );
};

export default Home;

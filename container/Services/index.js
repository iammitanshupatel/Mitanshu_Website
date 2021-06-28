import Card from '../../component/Card';
import Web from '../../public/icon/desktop-outline.svg';

const Services = ({ data }) => (
  <>
    <section id="Services">
      <div className="srvContainer">
        <div className="srvCol">
          <div className="secDesc">
            <h1>{data.header.title}</h1>
            <div className="p2">
              <h2>{data.header.caption}</h2>
            </div>
          </div>
          <div className="cardRow">
            {data.services.map(x => (
              <Card variant="srvCard">
                <div className="featureBox">
                  <Web />
                  <div className="featureContent">
                    <h5>{x.title}</h5>
                    <p>{x.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div className="separated" />
  </>
);
export default Services;

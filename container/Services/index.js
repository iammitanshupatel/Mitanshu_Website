import Card from '../../component/Card';
import Web from '../../public/icon/desktop-outline.svg';
import common from '../../common-styles/common.module.scss';
import card from '../../component/Card/card.module.scss';

const Services = ({ data }) => (
  <>
    <section id="Services">
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={common.secDesc}>
            <h1>{data.header.title}</h1>
            <div className={common.p2}>
              <h2>{data.header.caption}</h2>
            </div>
          </div>
          <div className={common.cardRow}>
            {data.services.map(x => (
              <Card key={x.id} variant="srvCard">
                <div className={card.featureBox}>
                  <Web />
                  <div className={card.featureContent}>
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
    <div className={common.separated} />
  </>
);
export default Services;

import dynamic from 'next/dynamic';
const Card = dynamic(() => import('component/Card'));
const Icon = dynamic(() => import('component/Icon'));
import common from 'styles/common.module.scss';
import card from 'component/Card/card.module.scss';

const Services = ({ data }) => (
  <>
    <section id="Services">
      <div className={common.srvContainer}>
        <div className={common.srvCol}>
          <div className={common.secDesc}>
            <h2>{data?.header?.title}</h2>
            <div className={common.p2}>
              <h3>{data?.header?.caption}</h3>
            </div>
          </div>
          <div className={common.cardRow}>
            {data?.services?.map(x => (
              <Card key={x?.id} variant="srvCard">
                <div className={card.featureBox}>
                  <Icon
                    ariaLabel={x?.name ? `${x.name} icon` : 'Icon'}
                    key={x?.id}
                    socialLink={x}
                    variant="servicesIcon"
                  />
                  <div className={card.featureContent}>
                    <h3>{x?.name}</h3>
                    <p>{x?.description}</p>
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

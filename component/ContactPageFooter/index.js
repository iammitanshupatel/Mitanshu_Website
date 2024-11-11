import Image from 'next/image';
import styles from './contactPageFooter.module.scss';
import common from 'styles/common.module.scss';
import Icon from '../Icon';

const ContactPageFooter = ({ data }) => {
  return (
    <>
      <div className={`${common.containerCtc} ${styles.top120}`}>
        <div className={`${styles.contactInfos} ${common.txc}`}>
          {data?.socialMedia?.map(x => (
            <div key={x?.id} className={styles.responsiveInfo}>
              <div className={styles.iconWidth}>
                <Icon
                  ariaLabel={x?.name ? `${x.name} icon` : 'Icon'}
                  key={x?.id}
                  socialLink={x}
                  variant="contactIcon"
                />
                <a href={x?.url} aria-label={x?.name}>
                  {x?.displayName}
                </a>
                <span>{x?.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="map" className={styles.map}>
        <img
          loading="lazy"
          src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/77.7733,12.9786,12,0/1200x300?before_layer=admin-1-boundary-bg&logo=false&access_token=pk.eyJ1IjoibWl0YW5zaHUtcGF0ZWwiLCJhIjoiY2tyazlveW41MGFibDJvbDczOHo2Nm41ZSJ9.2kzuysnz2J1jgwBjk7axRg"
          alt="My location"
        />
      </div>
    </>
  );
};

export default ContactPageFooter;

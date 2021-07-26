import Mail from '../../public/icon/mail-outline.svg';
import Call from '../../public/icon/call-outline.svg';
import Location from '../../public/icon/location-outline.svg';
import styles from './contactPageFooter.module.scss';
import common from '../../styles/common.module.scss';
import Icon from '../Icon';

const ContactPageFooter = ({ data }) => {
  return (
    <>
      <div className={`${common.containerCtc} ${styles.top120}`}>
        <div className={`${styles.contactInfos} ${common.txc}`}>
          {data?.socialMedia?.map(x => (
            <div key={x.id} className={styles.responsiveInfo}>
              <div className={styles.iconWidth}>
                <Icon key={x.id} socialLink={x} variant="contactIcon" />
                <a href={x.url}>{x.displayName}</a>
                <span>{x.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="map" className={styles.map}>
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+dc2626(72.5203,23.0509)/72.5196,23.0513,14.08,0/1200x300@2x?before_layer=admin-1-boundary-bg&logo=false&access_token=pk.eyJ1IjoibWl0YW5zaHUtcGF0ZWwiLCJhIjoiY2tyazlveW41MGFibDJvbDczOHo2Nm41ZSJ9.2kzuysnz2J1jgwBjk7axRg"
          alt="My location"
        />
      </div>
    </>
  );
};

export default ContactPageFooter;

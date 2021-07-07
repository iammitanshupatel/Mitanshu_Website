import Mail from '../../public/icon/mail-outline.svg';
import Call from '../../public/icon/call-outline.svg';
import Location from '../../public/icon/location-outline.svg';

const ContactPageFooter = () => (
  <>
    <div className="containerCtc top120">
      <div className="contactInfos txc">
        <div className="responsiveInfo">
          <div className="iconWidth">
            <Mail />
            <a href="mailto:mitanshu.u.patel@gmail.com">mitanshu.u.patel@gmail.com</a>
            <span>email</span>
          </div>
        </div>
        <div className="responsiveInfo">
          <div className="iconWidth">
            <Location />
            <a href="#!">V-10 Radhesh Appts, Thaltej, Gujarat, 380054, India</a>
            <span>address</span>
          </div>
        </div>
        <div className="responsiveInfo wFull">
          <div className="iconWidth">
            <Call />
            <a href="tel:9104552342">+91 91045 52342</a>
            <span>phone</span>
          </div>
        </div>
      </div>
    </div>
    <div className="map">
      <img
        src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAEGvdbD539IOD6GeZEIQfUbNdchSbidDM&center=bengaluru&markers=size:tiny%7Ccolor:red|12.850052,77.646571&zoom=9&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=1200x150&scale=2&visual_refresh=true"
        title="Profile Picture"
        alt="Profile avatar"
      />
    </div>
  </>
);

export default ContactPageFooter;

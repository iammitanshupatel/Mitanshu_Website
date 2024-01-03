import UpArrow from '../../public/icon/chevron-up-outline.svg';
import styles from './footer.module.scss';
import common from 'styles/common.module.scss';

const Footer = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });
  };
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrap} ${common.containerCtc}`}>
        <div className={styles.footerInfo}>
          <p>
            You can follow me on{' '}
            <a
              target="_blank"
              aria-label="My github account"
              rel="noreferrer"
              href="https://github.com/iammitanshupatel">
              Github
            </a>
            ,{' '}
            <a
              target="_blank"
              aria-label="My facebook account"
              rel="noreferrer"
              href="fb://profile/mitanshu.patel23">
              Facebook
            </a>
            ,{' '}
            <a
              target="_blank"
              aria-label="My twitter account"
              rel="noreferrer"
              href="https://twitter.com/mitanshu_patel_">
              Twitter
            </a>
            ,{' '}
            <a
              target="_blank"
              aria-label="My linkedin account"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mitanshupatel">
              Linkedin
            </a>{' '}
            &{' '}
            <a
              target="_blank"
              aria-label="My instagram account"
              rel="noreferrer"
              href="http://instagram.com/mitanshu.patel23">
              Instagram
            </a>
            , or say “hello” at{' '}
            <a
              target="_blank"
              aria-label="My whatsapp number"
              rel="noreferrer"
              href="https://wa.me/+919104552342?text=Hi%20there">
              Whatsapp
            </a>{' '}
            &{' '}
            <a
              target="_blank"
              aria-label="My email account"
              rel="noreferrer"
              href="mailto:mitanshu.u.patel@gmail.com">
              Mail
            </a>
          </p>
          <div className={styles.copyright}>
            <p>Mitanshu &copy; 2024. All Rights Reserved, Designed By Mitanshu Patel. </p>
          </div>
        </div>
        <div className={styles.rightText}>
          <div className={styles.uptotop} onClick={scrollToTop}>
            <p>Back to top</p> <UpArrow />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

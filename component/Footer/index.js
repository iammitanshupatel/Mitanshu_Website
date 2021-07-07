import React from 'react';
import UpArrow from '../../public/icon/chevron-up-outline.svg';

const Footer = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });
  };
  return (
    <footer>
      <div className="containerCtc wrap">
        <div className="footerInfo">
          <p>
            You can follow me on <a href="https://github.com/iammitanshupatel">Github</a>,{' '}
            <a href="fb://profile/fbID">Facebook</a>,{' '}
            <a href="https://twitter.com/UMitanshu">Twitter</a>,{' '}
            <a href="https://www.linkedin.com/in/mitanshu-patel/">Linkedin</a> &{' '}
            <a href="http://instagram.com/username">Instagram</a>, or say “hello” at{' '}
            <a href="https://wa.me/+919104552342?text=Hi%20there">Whatsapp</a> &{' '}
            <a href="mailto:mitanshu.u.patel@gmail.com">Mail</a>
          </p>
          <div className="copyright">
            <p>Mitanshu &copy; 2021. All Right Reserved, Designed By Mitanshu Patel. </p>
          </div>
        </div>
        <div className="rightText">
          <div className="uptotop" onClick={scrollToTop}>
            <p>Back to top</p> <UpArrow />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

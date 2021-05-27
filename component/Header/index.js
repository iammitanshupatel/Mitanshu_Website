import { useEffect, useRef } from 'react';

const Header = () => {
  const navbarRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
      } else {
        navbarRef.current.classList.remove('fixed-header');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);
  return (
    <header>
      <nav ref={navbarRef}>
        <div className="headerContainer">
          <a href="http://localhost:3000" className="logo">
            Mitanshu
          </a>
          <div className="hamburger ">
            <span></span>
            <span></span>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/AboutPage">About</a>
              </li>
              <li>
                <a href="/WorkPage">Work</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="/ContactPage">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

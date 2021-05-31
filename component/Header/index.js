import { useEffect, useRef } from 'react';

const Header = () => {
  const navbarRef = useRef(null);
  const collapseRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
        menuRef.current.classList.add('nav-black');
      } else {
        navbarRef.current.classList.remove('fixed-header');
        menuRef.current.classList.remove('nav-black');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const burgerClicked = () => {
    burgerRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('nav');
  };
  return (
    <header>
      <nav ref={navbarRef}>
        <div className="headerContainer">
          <a href="http://localhost:3000" className="logo">
            Mitanshu
          </a>
          <button ref={burgerRef} className="hamburger" type="button" onClick={burgerClicked}>
            <span id="span1" />
            <span id="span2" />
          </button>
          <div className="menu" ref={menuRef}>
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

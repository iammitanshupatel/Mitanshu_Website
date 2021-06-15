import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const liRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
        menuRef.current.classList.add('nav-transparent');
        headerRef.current.classList.add('bgBlack');
      } else {
        navbarRef.current.classList.remove('fixed-header');
        menuRef.current.classList.remove('nav-transparent');
        headerRef.current.classList.remove('bgBlack');
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
    <header ref={headerRef}>
      <nav ref={navbarRef}>
        <div className="headerContainer">
          <a href="http://localhost:3000" className="logo">
            Mitanshu
          </a>

          <div className="menu" ref={menuRef}>
            <ul>
              <li>
                <a ref={liRef} href="/">
                  Home
                </a>
              </li>
              <li>
                <a ref={liRef} href="/AboutPage">
                  About
                </a>
              </li>
              <li>
                <a ref={liRef} href="/WorkPage">
                  Work
                </a>
              </li>
              <li>
                <a ref={liRef} href="#">
                  Blogs
                </a>
              </li>
              <li>
                <a ref={liRef} href="/ContactPage">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            closeAfterTransition
            ref={burgerRef}
            className="hamburger"
            type="button"
            onClick={burgerClicked}>
            <span id="span1" />
            <span id="span2" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

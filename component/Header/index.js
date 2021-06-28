import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const liRef = useRef(null);
  const myBarRef = useRef(null);
  useEffect(() => {
    const myFunction = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      myBarRef.current.style.width = `${scrolled}%`;
    };
    window.onscroll = function () {
      myFunction();
    };
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
    menuRef.current.classList.toggle('right0');
  };
  return (
    <header ref={headerRef}>
      <nav ref={navbarRef}>
        <div className="headerContainer">
          <a href="http://localhost:3000" className="logo">
            Mitanshu
          </a>
          <button
            closeAfterTransition
            ref={burgerRef}
            className="hamburger"
            type="button"
            onClick={burgerClicked}>
            <span id="span1" />
            <span id="span2" />
          </button>
          <aside className="menu" id="sidenav-open" ref={menuRef}>
            <a href="#!" onClick={burgerClicked} />
            <ul>
              <li>
                <a ref={liRef} href="/">
                  Home
                </a>
              </li>
              <li>
                <a ref={liRef} className="activeLi" href="/AboutPage">
                  About
                </a>
              </li>
              <li>
                <a ref={liRef} href="/WorkPage">
                  Work
                </a>
              </li>
              <li>
                <a ref={liRef} href="/BlogPage">
                  Blogs
                </a>
              </li>
              <li>
                <a ref={liRef} href="/ContactPage">
                  Contact
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </nav>
      <div className="progress-container">
        <div className="progress-bar" ref={myBarRef} />
      </div>
    </header>
  );
};

export default Header;

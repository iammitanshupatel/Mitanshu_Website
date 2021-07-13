import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styles from './header.module.scss';

const Header = () => {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const liRef = useRef(null);
  const myBarRef = useRef(null);
  const { pathname } = useRouter();

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
        navbarRef.current.classList.add(styles.fixedHeader);
        headerRef.current.classList.add(styles.bgBlack);
      } else {
        navbarRef.current.classList.remove(styles.fixedHeader);
        headerRef.current.classList.remove(styles.bgBlack);
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const burgerClicked = () => {
    burgerRef.current.classList.toggle(styles.open);
    menuRef.current.classList.toggle(styles.right0);
  };
  return (
    <header className={styles.header} ref={headerRef}>
      <nav ref={navbarRef}>
        <div className={styles.headerContainer}>
          <a href="http://localhost:3000" className={styles.logo}>
            Mitanshu
          </a>
          <button
            closeaftertransition="true"
            ref={burgerRef}
            className={styles.hamburger}
            type="button"
            onClick={burgerClicked}>
            <span className={styles.span1} />
            <span className={styles.span2} />
          </button>
          <aside className={styles.menu} id="sidenav-open" ref={menuRef}>
            <a href="#!" onClick={burgerClicked} />
            <ul>
              <li>
                <a ref={liRef} className={pathname === '/' ? styles.active : undefined} href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  ref={liRef}
                  className={pathname === '/about' ? styles.active : undefined}
                  href="/about">
                  About
                </a>
              </li>
              <li>
                <a
                  ref={liRef}
                  className={pathname === '/work' ? styles.active : undefined}
                  href="/work">
                  Work
                </a>
              </li>
              <li>
                <a
                  ref={liRef}
                  className={pathname === '/blog' ? styles.active : undefined}
                  href="/blog">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  ref={liRef}
                  className={pathname === '/contact' ? styles.active : undefined}
                  href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </nav>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} ref={myBarRef} />
      </div>
    </header>
  );
};

export default Header;

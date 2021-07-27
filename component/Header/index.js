/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

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
          <Link href="/">
            <a className={styles.logo} aria-label="Go to home page">
              Mitanshu
            </a>
          </Link>
          <button
            ref={burgerRef}
            className={styles.hamburger}
            type="button"
            onClick={burgerClicked}>
            <span className={styles.span1} />
            <span className={styles.span2} />
          </button>
          <aside className={styles.menu} id="sidenav-open" ref={menuRef}>
            <a href="#!" aria-label="Click to close the navigation" onClick={burgerClicked} />
            <ul>
              <li>
                <Link href="/">
                  <a
                    aria-label="Go to home page"
                    ref={liRef}
                    onClick={burgerClicked}
                    className={pathname === '/' ? styles.active : undefined}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    aria-label="Go to about page"
                    ref={liRef}
                    onClick={burgerClicked}
                    className={pathname === '/about' ? styles.active : undefined}>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <a
                    aria-label="Go to work page"
                    ref={liRef}
                    onClick={burgerClicked}
                    className={pathname === '/work' ? styles.active : undefined}>
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    aria-label="Go to blog page"
                    ref={liRef}
                    onClick={burgerClicked}
                    className={pathname === '/blog' ? styles.active : undefined}>
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a
                    aria-label="Go to contact page"
                    ref={liRef}
                    onClick={burgerClicked}
                    className={pathname === '/contact' ? styles.active : undefined}>
                    Contact
                  </a>
                </Link>
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

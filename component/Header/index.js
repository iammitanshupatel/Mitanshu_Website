const Header = () => (
  <header>
    <div className="headerContainer">
      <a href="#" className="logo">
        Mitanshu
      </a>
      <div className="hamburger ">
        <span></span>
        <span></span>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

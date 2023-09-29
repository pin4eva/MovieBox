const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="/src/assets/tv.png" alt="" />
          <span className="logo-text">MovieBox</span>
        </div>

        <div className="search">
          <input type="search" />
          <img src="/src/assets/Search.svg" alt="search icon" />
        </div>

        <div className="sign-in">
          <button className="btn">Sign In</button>

          <img
            src="/src/assets/Menu.svg"
            alt="Menu icon"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

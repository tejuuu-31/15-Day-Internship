import "./Navbar.css";

function Navbar({ lightTheme, setLightTheme }) {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">TEJ</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="theme-toggle"
          onClick={() => setLightTheme(!lightTheme)}
        >
          {lightTheme ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
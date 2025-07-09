import logo from "../assets/logy.png";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="" />
      <p>THE REACT QUIZ</p>
    </header>
  );
}

export default Header;

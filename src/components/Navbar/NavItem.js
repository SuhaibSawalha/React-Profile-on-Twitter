import "./Navbar.css";

function NavItem({ name, icon }) {
  return (
    <a className="nav-item" href="#App-container">
      <span dangerouslySetInnerHTML={{ __html: icon }}></span>
      <p>{name}</p>
    </a>
  );
}

export default NavItem;

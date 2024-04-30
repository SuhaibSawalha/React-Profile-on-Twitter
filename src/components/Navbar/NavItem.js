import "./Navbar.css";

function NavItem({ name, icon }) {
  return (
    <div className="nav-item-container">
      <a className="nav-item" href="#App-container">
        <span dangerouslySetInnerHTML={{ __html: icon }}></span>
        <p>{name}</p>
      </a>
    </div>
  );
}

export default NavItem;

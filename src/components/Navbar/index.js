import Navbar from "./Navbar";
import NavItem from "./NavItem";

function App() {
  const navItems = require("./../../assets/nav-items.js");
  return (
    <Navbar>
      {navItems.map((item, index) => (
        <NavItem key={index} name={item.name} icon={item.icon} />
      ))}
    </Navbar>
  );
}

export default App;

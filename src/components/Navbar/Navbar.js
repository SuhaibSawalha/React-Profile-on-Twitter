import "./Navbar.css";
import Button from "./../Button/index";
import Profile from "./../Profile/index";
import icon from "./../../assets/img/X_icon.svg";

function Navbar({ children }) {
  return (
    <nav>
      <div>
        <a href="#App-container">
          <img
            src={icon}
            alt="X_icon"
            width="50"
            height="40"
            className="icon"
          />
        </a>
        {children}
        <Button
          text="Post"
          color="white"
          backgroundColor="#1D9BF0"
          width="calc(100% - 40px)"
          height="50px"
          fontSize="1.2rem"
        />
      </div>
      <div>
        <Profile
          name="Suhaib Sawalha"
          id="SuhaibSawalha"
          extention="jpeg"
          loggedUser={true}
        />
      </div>
    </nav>
  );
}

export default Navbar;

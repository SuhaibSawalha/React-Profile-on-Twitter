import "./Suggestions.css";
import Profile from "./../Profile/index";

function Suggestions() {
  return (
    <div className="suggestions">
      <h3>You might like</h3>
      <div className="suggested-pages">
        <Profile
          name="Tailwind CSS"
          id="tailwindcss"
          extention="png"
          loggedUser={false}
          verified={true}
        />
        <Profile
          name="TypeScript"
          id="typescript"
          extention="png"
          loggedUser={false}
        />{" "}
        <Profile
          name="freeCodeCamp.org"
          id="freeCodeCamp"
          extention="jpg"
          loggedUser={false}
          verified={true}
        />
      </div>
      <a href="#App-container" className="show-more">
        show more
      </a>
    </div>
  );
}

// name, id, extention, loggedUser

export default Suggestions;

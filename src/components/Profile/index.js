import "./Profile.css";
import Button from "./../Button/index";

function Profile({ name, id, extention, loggedUser }) {
  const picture = require(`./../../assets/img/profiles/${id}.${extention}`);
  return (
    <div className="profile">
      <div>
        <img src={picture} alt={name + "profile picture"} />
        <div>
          <p className="name">{name}</p>
          <p className="id">@{id}</p>
        </div>
      </div>
      {loggedUser ? (
        <a href="#App-container" style={{ textDecoration: "none" }}>
          <div className="three-dots"></div>
        </a>
      ) : (
        <Button />
      )}
    </div>
  );
}

export default Profile;

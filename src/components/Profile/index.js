import "./Profile.css";
import Button from "./../Button/index";
import verifiedIcon from "./../../assets/img/verified.png";

function Profile({ name, id, extention, loggedUser, verified = false }) {
  const picture = require(`./../../assets/img/profiles/${id}.${extention}`);
  return (
    <div className="profile">
      <div>
        <img src={picture} alt={name + "profile picture"} />
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="name">{name}</p>
            {verified && (
              <img src={verifiedIcon} alt="verifed" className="verified" />
            )}
          </div>
          <p className="id">@{id}</p>
        </div>
      </div>
      <a
        href="#App-container"
        style={{ textDecoration: "none" }}
        className="action"
      >
        {loggedUser ? (
          <div className="three-dots"></div>
        ) : (
          <Button
            text="Follow"
            color="black"
            backgroundColor="white"
            width="80px"
            height="35px"
            fontSize="0.8rem"
          />
        )}
      </a>
    </div>
  );
}

export default Profile;

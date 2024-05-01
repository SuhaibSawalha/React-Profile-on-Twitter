import "./Account.css";
import FollowButton from "./../FollowButton/index";
import verifiedIcon from "./../../assets/img/verified.png";

function Profile({ name, id, extention, loggedUser, verified = false }) {
  const picture = require(`./../../assets/img/accounts/${id}/profile.${extention}`);
  return (
    <div className="account">
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
      {loggedUser ? (
        <a
          href="#App-container"
          style={{ textDecoration: "none" }}
          className="action"
        >
          <div className="three-dots"></div>
        </a>
      ) : (
        <FollowButton />
      )}
    </div>
  );
}

export default Profile;

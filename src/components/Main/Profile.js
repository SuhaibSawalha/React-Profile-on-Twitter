import "./Main.css";
import FollowButton from "./../FollowButton/index";
import Info from "./Info";
import Post from "./Post";

function Profile({
  name,
  id,
  profileExtention,
  coverExtention,
  verified = false,
  descreption,
  webRef,
  followersCount,
  followingCount,
}) {
  const profilePicture = require(`./../../assets/img/accounts/${id}/profile.${profileExtention}`);
  const coverPicture = require(`./../../assets/img/accounts/${id}/cover.${coverExtention}`);
  return (
    <div className="profile">
      <img className="cover-picture" src={coverPicture} alt="cover" />
      <div className="account-header">
        <div className="profile-picture-container">
          <img className="profile-picture" src={profilePicture} alt="profile" />
        </div>
        <div style={{ display: "flex" }}>
          <button className="three-dots-button">
            <p>...</p>
          </button>
          <FollowButton />
        </div>
      </div>
      <Info
        name={name}
        verified={verified}
        id={id}
        descreption={descreption}
        webRef={webRef}
        joinedDate="July 2013"
        followersCount={followersCount}
        followingCount={followingCount}
      />
      <Post
        pinned={true}
        id={id}
        profileExtention={profileExtention}
        name={name}
        verified={verified}
        date="Jan 18"
        content={`
        <p> React Conf is back for 2024! Join our co-hosts
          <a href="https://www.meta.com/" target="_blank" rel="noreferrer">
            @Meta
          </a>
        and
          <a href="https://www.callstack.com/" target="_blank" rel="noreferrer">
            @callstackio
          </a>
        </p>

        <p> May 15-16 in Henderson, Nevada or join the free livestream. </p>
        <p>&nbsp;</p>
        <p> Sign up here for updates:
          <a href="https://conf.react.dev" target="_blank" rel="noreferrer">
            conf.react.dev
          </a>
        </p>
        `}
        replies="56"
        reposts="339"
        likes="1.4K"
        views="287K"
      />
    </div>
  );
}

export default Profile;

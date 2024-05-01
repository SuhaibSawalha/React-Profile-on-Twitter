import "./Main.css";
import verifiedIcon from "./../../assets/img/verified.png";

const webRefIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="#757575"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg>`;
const dateIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="#757575"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>`;

function Info({
  name,
  verified = false,
  id,
  descreption,
  webRef,
  joinedDate,
  followersCount,
  followingCount,
}) {
  return (
    <div className="info">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>{name}</h2>
        {verified && (
          <img src={verifiedIcon} alt="verifed" className="verified" />
        )}
      </div>
      <p className="id">@{id}</p>
      <p className="descreption">{descreption}</p>
      <div className="web-date">
        <div className="web">
          <span dangerouslySetInnerHTML={{ __html: webRefIcon }}></span>
          <a href={"https://" + webRef} target="_blank" rel="noreferrer">
            {webRef}
          </a>
        </div>
        <div className="date">
          <span dangerouslySetInnerHTML={{ __html: dateIcon }}></span>
          <p>{"Joined " + joinedDate}</p>
        </div>
      </div>
      <div className="followers-following">
        <p className="following">
          <strong>{followingCount}</strong> Following
        </p>
        <p className="followers">
          <strong>{followersCount}</strong> Followers
        </p>
      </div>
    </div>
  );
}

export default Info;

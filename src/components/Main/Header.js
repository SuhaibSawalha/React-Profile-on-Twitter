import verifiedIcon from "./../../assets/img/verified.png";

function Header({ accountName, tweetsCount, verified = false }) {
  return (
    <header>
      <button> &larr;</button>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{accountName}</h2>
          {verified && (
            <img src={verifiedIcon} alt="verifed" className="verified" />
          )}
        </div>
        <p>{tweetsCount} posts</p>
      </div>
    </header>
  );
}

export default Header;

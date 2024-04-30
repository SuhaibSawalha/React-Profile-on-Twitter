import "./Trends.css";

function Trend({ category, title, tweetsCount }) {
  return (
    <div className="trend">
      <p className="category">{category} . Trending</p>
      <h4 className="title">#{title}</h4>
      <p className="tweets-count">{tweetsCount} posts</p>
    </div>
  );
}

export default Trend;
